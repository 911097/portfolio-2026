import React, { useEffect, useRef } from 'react';

interface FluidContourCanvasProps {
  className?: string;
}

// =============================================================================
// Deterministic 2D Perlin Gradient Noise
// Provides natural organic displacement for topographic elevation contour lines
// =============================================================================
const PERM = new Uint8Array(512);
const P = new Uint8Array(256);
for (let i = 0; i < 256; i++) P[i] = i;

let seed = 123456789;
function pseudoRandom() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}
for (let i = 255; i > 0; i--) {
  const r = Math.floor(pseudoRandom() * (i + 1));
  const tmp = P[i];
  P[i] = P[r];
  P[r] = tmp;
}
for (let i = 0; i < 512; i++) PERM[i] = P[i & 255];

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}

function grad(hash: number, x: number, y: number) {
  const h = hash & 7;
  const u = h < 4 ? x : y;
  const v = h < 4 ? y : x;
  return ((h & 1) ? -u : u) + ((h & 2) ? -2.0 * v : 2.0 * v);
}

function noise2D(x: number, y: number) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);
  const u = fade(xf);
  const v = fade(yf);
  const aa = PERM[PERM[X] + Y];
  const ab = PERM[PERM[X] + Y + 1];
  const ba = PERM[PERM[X + 1] + Y];
  const bb = PERM[PERM[X + 1] + Y + 1];
  return lerp(
    lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
    lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
    v
  );
}

export const FluidContourCanvas: React.FC<FluidContourCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;

    // High DPI Retina Support
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) return;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // =========================================================================
    // Precise Topographic Elevation Contour Configuration
    // Exact contour structure from original screenshot:
    // 34 elevation contours sweeping diagonally from mid-right to bottom-center
    // + 10 undulating corner loops
    // =========================================================================
    const MAIN_LINES = 34;
    const SAMPLES = 90;
    const CORNER_LOOPS = 10;
    const CORNER_SAMPLES = 55;

    const render = (timestamp: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Slow dynamic breathing wave loop (~26s)
      const t = timestamp * 0.00020;

      // -----------------------------------------------------------------------
      // 1. Primary Topographic Contour Field:
      //    Flows from Right Edge (y: 35%~78%) down to Bottom Edge (x: 54%~94%)
      //    Accurately shaping the natural valley dip & prominent ridge crest
      // -----------------------------------------------------------------------
      for (let i = 0; i < MAIN_LINES; i++) {
        const u = i / (MAIN_LINES - 1); // 0 (outermost / towards center) to 1 (innermost / lower-right)
        const ru = Math.pow(u, 0.90);

        // Right edge origin
        const x0 = width * 1.02;
        const y0 = height * (0.35 + 0.42 * ru);

        // Bottom edge terminus
        const x1 = width * (0.54 + 0.38 * ru);
        const y1 = height * 1.03;

        // Tangent & Normal vectors (normal points inward-upward to canvas center)
        const dx = x1 - x0;
        const dy = y1 - y0;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;

        // Index contours & key highlight contours
        const isHighlight = i === 13 || i === 20;
        const isIndexContour = i % 5 === 0;

        let strokeColor: string;
        let strokeW: number;

        if (isHighlight) {
          strokeW = 1.15;
          strokeColor = 'rgba(235, 185, 105, 0.48)'; // Luminous gold accent line
        } else if (isIndexContour) {
          strokeW = 0.90;
          strokeColor = 'rgba(215, 178, 95, 0.32)'; // Signature golden index contour
        } else {
          const alpha = 0.10 + (1 - Math.abs(u - 0.5) * 2) * 0.16;
          strokeW = 0.65;
          strokeColor = i % 2 === 0
            ? `rgba(212, 175, 55, ${alpha.toFixed(2)})` // Warm antique gold
            : `rgba(180, 145, 90, ${(alpha * 0.85).toFixed(2)})`; // Soft deep bronze
        }

        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeW;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const pts: { x: number; y: number }[] = [];

        // Sample points along the curve from s = 0 to s = 1
        for (let j = 0; j <= SAMPLES; j++) {
          const s = j / SAMPLES;

          // Linear baseline
          const bx = x0 + s * dx;
          const by = y0 + s * dy;

          // 1. Inward bow arc
          const bow = Math.sin(s * Math.PI) * (width * (0.065 + (1 - ru) * 0.028));

          // 2. Iconic terrain curvature: valley dip (s ~ 0.45) & ridge crest (s ~ 0.74)
          const ridgeWave = Math.sin(s * Math.PI * 2.5 - 0.42) * (width * 0.038 + ru * 12);
          const microHarmonic = Math.cos(s * Math.PI * 4.4 + 0.25) * (width * 0.013);

          // 3. 2D Perlin noise layer displacement
          const nVal = noise2D(ru * 2.4 + s * 2.2, t * 0.35 + i * 0.038);
          const noiseDisp = nVal * (10 + (1 - ru) * 8);

          // 4. Subtle respiratory wave motion
          const breathWave = Math.sin(t * 0.58 + s * 2.8 + i * 0.11) * (4.5 + ru * 3);

          const totalDisp = bow + ridgeWave + microHarmonic + noiseDisp + breathWave;
          const px = bx + nx * totalDisp;
          const py = by + ny * totalDisp;

          pts.push({ x: px, y: py });
        }

        // Draw smooth quadratic curve through points
        if (pts.length > 2) {
          ctx.moveTo(pts[0].x, pts[0].y);
          for (let k = 1; k < pts.length - 1; k++) {
            const midX = (pts[k].x + pts[k + 1].x) / 2;
            const midY = (pts[k].y + pts[k + 1].y) / 2;
            ctx.quadraticCurveTo(pts[k].x, pts[k].y, midX, midY);
          }
          const last = pts[pts.length - 1];
          ctx.lineTo(last.x, last.y);
        }

        ctx.stroke();
      }

      // -----------------------------------------------------------------------
      // 2. Corner Base Loops (Lower-Right Cradling Ripples)
      // -----------------------------------------------------------------------
      for (let m = 0; m < CORNER_LOOPS; m++) {
        const w = m / (CORNER_LOOPS - 1);
        const cornerAlpha = 0.08 + Math.sin(w * Math.PI) * 0.14;
        const cornerStroke = m % 2 === 0 ? 0.80 : 0.60;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(212, 175, 55, ${cornerAlpha.toFixed(2)})`;
        ctx.lineWidth = cornerStroke;

        const cX0 = width * 1.02;
        const cY0 = height * (0.74 + 0.20 * w);
        const cX1 = width * (0.76 + 0.20 * w);
        const cY1 = height * 1.03;

        const cdx = cX1 - cX0;
        const cdy = cY1 - cY0;
        const clen = Math.hypot(cdx, cdy) || 1;
        const cnx = -cdy / clen;
        const cny = cdx / clen;

        const cornerPts: { x: number; y: number }[] = [];
        for (let step = 0; step <= CORNER_SAMPLES; step++) {
          const cs = step / CORNER_SAMPLES;
          const cbx = cX0 + cs * cdx;
          const cby = cY0 + cs * cdy;

          const cBow = Math.sin(cs * Math.PI) * (width * 0.028 + w * 6);
          const cWave = Math.sin(cs * Math.PI * 2.8 - 0.25) * 8;
          const cNoise = noise2D(w * 1.8 + cs * 2.0, t * 0.4 + m * 0.1) * 5;
          const cBreath = Math.sin(t * 0.5 + cs * 2.4 + m * 0.18) * 3;

          const cDisp = cBow + cWave + cNoise + cBreath;
          cornerPts.push({
            x: cbx + cnx * cDisp,
            y: cby + cny * cDisp,
          });
        }

        if (cornerPts.length > 2) {
          ctx.moveTo(cornerPts[0].x, cornerPts[0].y);
          for (let p = 1; p < cornerPts.length - 1; p++) {
            const midX = (cornerPts[p].x + cornerPts[p + 1].x) / 2;
            const midY = (cornerPts[p].y + cornerPts[p + 1].y) / 2;
            ctx.quadraticCurveTo(cornerPts[p].x, cornerPts[p].y, midX, midY);
          }
          const lastPt = cornerPts[cornerPts.length - 1];
          ctx.lineTo(lastPt.x, lastPt.y);
        }

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none select-none ${className}`}
      style={{ display: 'block' }}
    />
  );
};
