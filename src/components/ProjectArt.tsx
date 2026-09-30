import React from 'react';

interface ProjectArtProps {
  theme: 'system-dev' | 'visual-design' | 'ui-ux-phone' | 'campus-branding' | 'mobile-wallet' | 'infographic-poster' | 'hospital-sensing' | 'rehab-skeleton' | 'safety-surveillance' | 'rfm-analytics' | 'supply-chain' | 'smartfit-mirror' | 'lt-architects' | 'rwd-luoyang' | 'app-ui' | 'elderly-care' | 'white-model-3d' | 'print-isometric' | 'anonymous-tracking-ui';
  className?: string;
  isHovered?: boolean;
}

export const ProjectArt: React.FC<ProjectArtProps> = ({ theme, className = '', isHovered = false }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none transition-transform duration-700 ease-out ${isHovered ? 'scale-[1.03]' : 'scale-100'} ${className}`}>
      
      {/* 0A. System Development (Screenshot 2, Card 1: Sage green workspace dashboard) */}
      {theme === 'system-dev' && (
        <svg viewBox="0 0 800 560" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="card-soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#1e3322" floodOpacity="0.16" />
            </filter>
          </defs>
          {/* Base Sage Green Background */}
          <rect width="800" height="560" fill="#C4D4C0" />

          {/* Floating UI Window / Workspace Container */}
          <g filter="url(#card-soft-shadow)" transform="translate(60, 48)">
            {/* Window Base Card */}
            <rect width="680" height="464" rx="20" fill="#F4F8F3" />

            {/* Sidebar on left */}
            <rect width="130" height="464" rx="20" fill="#2E4839" />
            <rect x="110" y="0" width="20" height="464" fill="#2E4839" />
            <text x="36" y="64" fill="#E8F2E8" fontSize="28" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">n.</text>
            <rect x="36" y="112" width="56" height="5" rx="2.5" fill="#A4CCA8" />
            <rect x="36" y="128" width="42" height="5" rx="2.5" fill="#6B9972" />
            <rect x="36" y="144" width="48" height="5" rx="2.5" fill="#6B9972" />
            <rect x="36" y="160" width="36" height="5" rx="2.5" fill="#6B9972" />

            {/* Main Content Area */}
            <text x="160" y="52" fill="#5F7065" fontSize="13" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="500">Overview</text>
            
            {/* Avatar Pill on Top Right */}
            <circle cx="620" cy="48" r="16" fill="#C4D7A4" />
            <text x="620" y="54" textAnchor="middle" fill="#233B28" fontSize="13" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">Y</text>

            {/* Greeting */}
            <text x="160" y="116" fill="#1C2D22" fontSize="28" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">
              Good morning, Yuru
            </text>
            {/* 8-pointed gold star */}
            <g transform="translate(450, 100) scale(0.9)">
              <polygon points="12,0 15,8 24,12 15,15 12,24 8,15 0,12 8,8" fill="#E5A84B" />
            </g>

            {/* Subtitle */}
            <text x="160" y="144" fill="#75887C" fontSize="13" fontFamily="'Plus Jakarta Sans', sans-serif">
              Here&apos;s what&apos;s happening with your workspace.
            </text>

            {/* Metric Card 1: PROJECTS */}
            <g transform="translate(160, 172)">
              <rect width="180" height="116" rx="14" fill="#FFFFFF" stroke="#E1EBE0" strokeWidth="1" />
              <text x="20" y="34" fill="#8A9D91" fontSize="11" fontWeight="600" letterSpacing="0.08em" fontFamily="'JetBrains Mono', monospace">PROJECTS</text>
              <text x="20" y="78" fill="#1A2D20" fontSize="34" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">24</text>
              <text x="82" y="74" fill="#3D7D52" fontSize="13" fontWeight="600" fontFamily="'JetBrains Mono', monospace">↗ 12.8%</text>
            </g>

            {/* Metric Card 2: IN PROGRESS */}
            <g transform="translate(360, 172)">
              <rect width="180" height="116" rx="14" fill="#FFFFFF" stroke="#E1EBE0" strokeWidth="1" />
              <text x="20" y="34" fill="#8A9D91" fontSize="11" fontWeight="600" letterSpacing="0.08em" fontFamily="'JetBrains Mono', monospace">IN PROGRESS</text>
              <text x="20" y="78" fill="#1A2D20" fontSize="34" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">08</text>
              <text x="82" y="74" fill="#3D7D52" fontSize="13" fontWeight="600" fontFamily="'JetBrains Mono', monospace">↗ 4.2%</text>
            </g>

            {/* Activity Overview Bar Chart */}
            <g transform="translate(160, 314)">
              <text x="0" y="18" fill="#2E4436" fontSize="13" fontWeight="600" fontFamily="'Plus Jakarta Sans', sans-serif">Activity overview</text>
              <g transform="translate(0, 32)">
                <rect x="0" y="44" width="28" height="46" rx="6" fill="#A8CDA4" />
                <rect x="42" y="24" width="28" height="66" rx="6" fill="#386A45" />
                <rect x="84" y="48" width="28" height="42" rx="6" fill="#A8CDA4" />
                <rect x="126" y="10" width="28" height="80" rx="6" fill="#2E4839" />
                <rect x="168" y="36" width="28" height="54" rx="6" fill="#386A45" />
                <rect x="210" y="20" width="28" height="70" rx="6" fill="#A8CDA4" />
                <rect x="252" y="6" width="28" height="84" rx="6" fill="#2E4839" />
                <rect x="294" y="28" width="28" height="62" rx="6" fill="#386A45" />
                <rect x="336" y="18" width="28" height="72" rx="6" fill="#2E4839" />
              </g>
            </g>
          </g>

          {/* Yellow/Gold Square Arrow Badge in bottom right corner */}
          <g transform="translate(730, 490)">
            <rect x="-24" y="-24" width="48" height="48" rx="6" fill="#E5A84B" />
            <path d="M-8,8 L8,-8 M-2,-8 L8,-8 L8,2" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </svg>
      )}

      {/* 0B. Visual Design (Screenshot 2, Card 2: Terracotta blush with forme and orbital lines) */}
      {theme === 'visual-design' && (
        <svg viewBox="0 0 800 560" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="text-soft-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3B1814" floodOpacity="0.15" />
            </filter>
          </defs>
          <rect width="800" height="560" fill="#DCB0A5" />

          {/* Intersecting Orbital Ellipses */}
          <ellipse cx="400" cy="270" rx="280" ry="190" fill="none" stroke="#FAF1ED" strokeWidth="1" opacity="0.65" transform="rotate(-12 400 270)" />
          <ellipse cx="420" cy="260" rx="220" ry="170" fill="none" stroke="#FAF1ED" strokeWidth="1" opacity="0.5" transform="rotate(24 420 260)" />
          <circle cx="360" cy="290" r="190" fill="none" stroke="#FAF1ED" strokeWidth="0.8" opacity="0.4" />

          {/* Top Right Circle Seal Stamp */}
          <g transform="translate(680, 110)">
            <circle cx="0" cy="0" r="38" fill="none" stroke="#68342E" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />
            <circle cx="0" cy="0" r="35" fill="none" stroke="#68342E" strokeWidth="0.7" opacity="0.5" />
            <text x="0" y="-12" textAnchor="middle" fill="#582924" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">F / 01</text>
            <text x="0" y="2" textAnchor="middle" fill="#582924" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">DESIGN</text>
            <text x="0" y="16" textAnchor="middle" fill="#582924" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.15em">STUDY</text>
          </g>

          {/* Center High-Contrast Editorial Serif Typography: forme */}
          <g filter="url(#text-soft-glow)" transform="translate(400, 310)">
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="#52241F"
              fontSize="148"
              fontFamily="'Instrument Serif', 'Cormorant Garamond', Georgia, serif"
              fontStyle="italic"
              letterSpacing="-0.02em"
            >
              forme
            </text>
          </g>

          {/* Bottom Left Minimalist Typography */}
          <g transform="translate(68, 480)">
            <text x="0" y="0" fill="#5A2D27" fontSize="11" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.18em" fontWeight="500">
              A STUDY IN FORM
            </text>
            <text x="0" y="16" fill="#5A2D27" fontSize="11" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.18em" fontWeight="500">
              &amp; FEELING
            </text>
          </g>

          {/* Yellow/Gold Square Arrow Badge in bottom right corner */}
          <g transform="translate(730, 490)">
            <rect x="-24" y="-24" width="48" height="48" rx="6" fill="#E5A84B" />
            <path d="M-8,8 L8,-8 M-2,-8 L8,-8 L8,2" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </svg>
      )}

      {/* 0C. UI/UX Exploration (Screenshot 2, Card 3: Lavender slate phone mockup with pinned note) */}
      {theme === 'ui-ux-phone' && (
        <svg viewBox="0 0 800 560" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="phone-3d-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="24" stdDeviation="26" floodColor="#272A36" floodOpacity="0.22" />
            </filter>
            <filter id="sticky-note-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="8" stdDeviation="10" floodColor="#1E202B" floodOpacity="0.18" />
            </filter>
          </defs>
          <rect width="800" height="560" fill="#B5B8C8" />

          {/* Centered Mobile Phone Frame */}
          <g filter="url(#phone-3d-shadow)" transform="translate(290, 80)">
            <rect width="220" height="480" rx="36" fill="#1C1F28" stroke="#3D4253" strokeWidth="2" />
            <rect x="10" y="10" width="200" height="460" rx="28" fill="#FAF9F5" />
            <rect x="80" y="20" width="40" height="8" rx="4" fill="#1C1F28" />

            {/* Screen Inner Content */}
            <text x="100" y="94" textAnchor="middle" fill="#88857E" fontSize="11" fontFamily="'Instrument Serif', serif" fontStyle="italic">
              good things take time
            </text>

            <text x="40" y="152" fill="#1F232E" fontSize="30" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif" letterSpacing="-0.02em">
              Make
            </text>
            <text x="40" y="190" fill="#1F232E" fontSize="30" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif" letterSpacing="-0.02em">
              space
            </text>
            <text x="40" y="228" fill="#1F232E" fontSize="30" fontStyle="italic" fontFamily="'Instrument Serif', serif" letterSpacing="0.02em">
              for
            </text>
            <text x="40" y="266" fill="#1F232E" fontSize="30" fontStyle="italic" fontFamily="'Instrument Serif', serif" letterSpacing="0.02em">
              yourself.
            </text>

            {/* Warm Sand Arch/Sun Semicircle */}
            <path d="M 50,440 A 50,50 0 0,1 150,440 Z" fill="#E8C9A8" opacity="0.9" />
            <circle cx="100" cy="405" r="24" fill="#ECC499" />
          </g>

          {/* Pinned Paper Note Card on Top-Right */}
          <g filter="url(#sticky-note-shadow)" transform="translate(510, 110) rotate(5)">
            <rect width="180" height="106" rx="4" fill="#FAF6EE" stroke="#EAE3D4" strokeWidth="1" />
            <rect x="74" y="-8" width="32" height="12" rx="2" fill="#E5D9C4" opacity="0.8" />
            <text x="20" y="44" fill="#3D322B" fontSize="18" fontFamily="'Instrument Serif', serif" fontStyle="italic">
              A little pause,
            </text>
            <text x="20" y="70" fill="#3D322B" fontSize="18" fontFamily="'Instrument Serif', serif" fontStyle="italic">
              a lot of clarity.
            </text>
            <g transform="translate(132, 66) scale(0.65)">
              <polygon points="12,0 15,8 24,12 15,15 12,24 8,15 0,12 8,8" fill="#E5A84B" />
            </g>
          </g>

          {/* Yellow/Gold Square Arrow Badge in bottom right corner */}
          <g transform="translate(730, 490)">
            <rect x="-24" y="-24" width="48" height="48" rx="6" fill="#E5A84B" />
            <path d="M-8,8 L8,-8 M-2,-8 L8,-8 L8,2" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </svg>
      )}
      
      {/* 1. Campus Event Branding (Screenshot 3, Card 1: Warm minimal stationery/identity mockup) */}
      {theme === 'campus-branding' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="warm-wood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E29D52" />
              <stop offset="50%" stopColor="#C87E34" />
              <stop offset="100%" stopColor="#9C5D1F" />
            </linearGradient>
            <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="12" dy="20" stdDeviation="18" floodColor="#281A0E" floodOpacity="0.28" />
            </filter>
          </defs>
          <rect width="800" height="500" fill="#E8A763" />
          {/* Angled Table Surface Grain */}
          <polygon points="0,0 800,0 800,500 0,500" fill="url(#warm-wood)" opacity="0.9" />
          
          {/* Angled Stack of Clean Ivory Identity Cards & Notebook */}
          <g filter="url(#soft-shadow)" transform="rotate(-18 360 260)">
            {/* Bottom Card */}
            <rect x="220" y="140" width="300" height="200" rx="4" fill="#E8E2D2" />
            {/* Top Card */}
            <rect x="200" y="120" width="300" height="200" rx="4" fill="#FAF6EC" stroke="#E5DEC9" strokeWidth="1" />
            {/* Geometric Branding Accents */}
            <rect x="230" y="150" width="40" height="6" rx="2" fill="#E5A84B" />
            <text x="230" y="200" fill="#2E2822" fontSize="20" fontFamily="'Instrument Serif', serif" letterSpacing="0.08em">IM ANNUAL 2025</text>
            <text x="230" y="222" fill="#75695C" fontSize="10" fontFamily="'JetBrains Mono', monospace">CAMPUS IDENTITY // SYSTEM SPEC</text>
            <circle cx="450" cy="220" r="16" fill="none" stroke="#D1C6AE" strokeWidth="1" />
            <circle cx="450" cy="220" r="4" fill="#E5A84B" />
          </g>
          {/* Ambient Lighting & Dust */}
          <circle cx="680" cy="120" r="140" fill="#FFE2C2" opacity="0.18" />
        </svg>
      )}

      {/* 2. Mobile Wallet App UI (Screenshot 3, Card 2: Phone prototype mockup) */}
      {theme === 'mobile-wallet' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="blur-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7CD0D6" />
              <stop offset="50%" stopColor="#BCE8EA" />
              <stop offset="100%" stopColor="#8CCAD3" />
            </linearGradient>
            <linearGradient id="phone-screen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <filter id="phone-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="14" dy="24" stdDeviation="22" floodColor="#0F3238" floodOpacity="0.35" />
            </filter>
          </defs>
          <rect width="800" height="500" fill="url(#blur-bg)" />
          {/* Office Desk Blur Circles in Background */}
          <circle cx="200" cy="180" r="120" fill="#EAF7F8" opacity="0.5" />
          <circle cx="640" cy="320" r="160" fill="#58B2BC" opacity="0.3" />

          {/* Smartphone Handheld Perspective */}
          <g filter="url(#phone-shadow)" transform="rotate(8 400 250)">
            <rect x="290" y="50" width="220" height="400" rx="36" fill="#0C1017" stroke="#334155" strokeWidth="3" />
            <rect x="302" y="66" width="196" height="368" rx="26" fill="url(#phone-screen)" />
            {/* Dynamic Island Notch */}
            <rect x="365" y="76" width="70" height="18" rx="9" fill="#000000" />
            {/* Screen Content */}
            <text x="400" y="180" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">MORE THAN A WALLET</text>
            <text x="400" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Make Paying</text>
            <text x="400" y="234" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Easier With</text>
            <text x="400" y="258" textAnchor="middle" fill="#38BDF8" fontSize="20" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Wallet.</text>
            {/* Decorative Sphere Orbit */}
            <circle cx="400" cy="135" r="28" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="400" cy="135" r="8" fill="#38BDF8" />
            {/* Get Started Button */}
            <rect x="335" y="340" width="130" height="34" rx="17" fill="#38BDF8" />
            <text x="400" y="362" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Get Started</text>
          </g>
        </svg>
      )}

      {/* 3. Infographic & Poster Design (Screenshot 3, Card 3: Poster grid collage) */}
      {theme === 'infographic-poster' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="gallery-wall" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C99484" />
              <stop offset="100%" stopColor="#A56E5F" />
            </linearGradient>
            <filter id="card-drop" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="3" dy="6" stdDeviation="6" floodColor="#35160E" floodOpacity="0.25" />
            </filter>
          </defs>
          <rect width="800" height="500" fill="url(#gallery-wall)" />
          {/* Poster Wall Grid Collage */}
          <g filter="url(#card-drop)" transform="translate(100, 50)">
            {/* Poster 1 */}
            <rect x="0" y="0" width="130" height="180" fill="#EAE5D9" />
            <text x="15" y="40" fill="#1C1A17" fontSize="24" fontFamily="'Instrument Serif', serif">MAP</text>
            <circle cx="65" cy="110" r="30" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeDasharray="4 2" />

            {/* Poster 2 */}
            <rect x="145" y="0" width="130" height="90" fill="#2D6A4F" />
            <text x="160" y="35" fill="#D8F3DC" fontSize="11" fontFamily="'JetBrains Mono', monospace">EASTER VIBES</text>
            <line x1="160" y1="50" x2="250" y2="50" stroke="#74C69D" strokeWidth="2" />

            {/* Poster 3 */}
            <rect x="145" y="100" width="130" height="80" fill="#D87A5E" />
            <text x="160" y="145" fill="#FBF3EC" fontSize="22" fontFamily="'Instrument Serif', serif">sloq</text>

            {/* Poster 4 */}
            <rect x="290" y="0" width="140" height="180" fill="#F4E8D7" />
            <polygon points="360,30 330,140 390,140" fill="#2E4057" />
            <text x="360" y="160" textAnchor="middle" fill="#2E4057" fontSize="9" fontFamily="'JetBrains Mono', monospace">TYPOGRAPHY 2024</text>

            {/* Poster 5 */}
            <rect x="445" y="0" width="130" height="180" fill="#E86A58" />
            <text x="460" y="50" fill="#FFFFFF" fontSize="32" fontFamily="'Instrument Serif', serif">21—</text>
            <text x="460" y="85" fill="#FFFFFF" fontSize="20" fontFamily="'Instrument Serif', serif">22.12</text>
          </g>
          {/* Subtle Frame Bar at Bottom */}
          <rect x="0" y="440" width="800" height="60" fill="#75483B" opacity="0.6" />
          <text x="760" y="475" textAnchor="end" fill="#F7DDD4" fontSize="11" fontFamily="'JetBrains Mono', monospace">2.5D ISOMETRIC ｜ PRINT & INFOGRAPHICS</text>
        </svg>
      )}

      {/* 4. Smart Hospital Sensing */}
      {theme === 'hospital-sensing' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cctv-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#12151B" />
              <stop offset="100%" stopColor="#0B0D12" />
            </linearGradient>
            <radialGradient id="sensor-radar" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="500" fill="url(#cctv-bg)" />
          <line x1="0" y1="80" x2="350" y2="240" stroke="#252A36" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="800" y1="80" x2="450" y2="240" stroke="#252A36" strokeWidth="1" strokeDasharray="4 4" />
          <rect x="240" y="160" width="320" height="260" fill="none" stroke="#EF4444" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.6" />
          <text x="250" y="180" fill="#EF4444" fontSize="10" fontFamily="'JetBrains Mono', monospace">RESTRICTED ZONE // OVERSTAY: 90F LIMIT</text>

          <rect x="360" y="120" width="130" height="280" rx="4" fill="url(#sensor-radar)" stroke="#10B981" strokeWidth="1.5" />
          <text x="360" y="110" fill="#10B981" fontSize="11" fontFamily="'JetBrains Mono', monospace">Person 1 [ReID: 0.65+ ID: #042]</text>
          
          <rect x="395" y="130" width="50" height="40" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
          <text x="450" y="145" fill="#F59E0B" fontSize="9" fontFamily="'JetBrains Mono', monospace">HEAD EXCLUDED</text>

          <circle cx="420" cy="150" r="4" fill="#3B82F6" />
          <line x1="420" y1="154" x2="420" y2="230" stroke="#3B82F6" strokeWidth="2" />
          <line x1="390" y1="180" x2="450" y2="180" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="390" cy="180" r="3.5" fill="#60A5FA" />
          <circle cx="450" cy="180" r="3.5" fill="#60A5FA" />
          <line x1="420" y1="230" x2="400" y2="310" stroke="#3B82F6" strokeWidth="2" />
          <line x1="420" y1="230" x2="440" y2="310" stroke="#3B82F6" strokeWidth="2" />
          <line x1="400" y1="310" x2="395" y2="390" stroke="#3B82F6" strokeWidth="2" />
          <line x1="440" y1="310" x2="445" y2="390" stroke="#3B82F6" strokeWidth="2" />

          <rect x="40" y="60" width="180" height="150" rx="4" fill="#0E1117" stroke="#252A36" strokeWidth="1" opacity="0.9" />
          <text x="50" y="80" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">28D FEATURE EXTRACT</text>
          <text x="50" y="100" fill="#CBD5E1" fontSize="9" fontFamily="'JetBrains Mono', monospace">SWR Ratio: 0.22</text>
          <text x="50" y="118" fill="#CBD5E1" fontSize="9" fontFamily="'JetBrains Mono', monospace">CIELAB Upper: 91.43</text>
          <text x="50" y="136" fill="#CBD5E1" fontSize="9" fontFamily="'JetBrains Mono', monospace">CIELAB Lower: 128.17</text>
          <text x="50" y="154" fill="#10B981" fontSize="9" fontFamily="'JetBrains Mono', monospace">DYNAMIC GATE: ACTIVE</text>
          <text x="760" y="470" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">FRAME 183 / 13,959 ｜ RTX 5060</text>
        </svg>
      )}

      {/* 5. AI Rehabilitation */}
      {theme === 'rehab-skeleton' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#14171E" />
          <circle cx="400" cy="220" r="160" fill="none" stroke="#262D3D" strokeWidth="1" />
          <circle cx="400" cy="220" r="120" fill="none" stroke="#31394D" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="380" cy="120" r="12" fill="#10B981" />
          <line x1="380" y1="132" x2="395" y2="230" stroke="#34D399" strokeWidth="3" />
          <line x1="395" y1="230" x2="470" y2="270" stroke="#34D399" strokeWidth="3" />
          <line x1="470" y1="270" x2="460" y2="380" stroke="#34D399" strokeWidth="3" />
          <line x1="395" y1="230" x2="340" y2="290" stroke="#34D399" strokeWidth="3" />
          <line x1="340" y1="290" x2="350" y2="380" stroke="#34D399" strokeWidth="3" />
          <path d="M 440 250 A 25 25 0 0 1 480 290" fill="none" stroke="#F59E0B" strokeWidth="2" />
          <text x="495" y="270" fill="#F59E0B" fontSize="12" fontFamily="'JetBrains Mono', monospace">KNEE 88° (OPTIMAL: 90°)</text>
          <circle cx="160" cy="180" r="54" fill="#1A202C" stroke="#10B981" strokeWidth="3" />
          <text x="160" y="175" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontFamily="'Instrument Serif', serif">85</text>
          <text x="160" y="198" textAnchor="middle" fill="#10B981" fontSize="10" fontFamily="'JetBrains Mono', monospace">SCORE / 100</text>
          <text x="160" y="260" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif">中華民國發明專利 I906167</text>
          <text x="760" y="470" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">MEDIAPIPE POSE ｜ KOREA SIIF 2026</text>
        </svg>
      )}

      {/* 6. AI Safety Monitoring */}
      {theme === 'safety-surveillance' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#0F1318" />
          <circle cx="580" cy="140" r="32" fill="#1E293B" stroke="#0284C7" strokeWidth="2" />
          <circle cx="580" cy="140" r="14" fill="#0284C7" />
          <path d="M 580 172 L 480 380 L 680 380 Z" fill="#0284C7" opacity="0.12" />
          <polyline points="280,380 340,360 410,340 480,350" fill="none" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 4" />
          <rect x="440" y="270" width="70" height="110" fill="none" stroke="#F43F5E" strokeWidth="1.8" />
          <text x="440" y="260" fill="#F43F5E" fontSize="10" fontFamily="'JetBrains Mono', monospace">TARGET DETECTED [ALERT]</text>
          <text x="60" y="90" fill="#38BDF8" fontSize="12" fontFamily="'JetBrains Mono', monospace">AUTO PHOTOCELL: 120 LUX (BOOSTED)</text>
          <text x="60" y="112" fill="#94A3B8" fontSize="11" fontFamily="'JetBrains Mono', monospace">DEEP SORT TRACKING ENGINE ACTIVE</text>
          <text x="760" y="470" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">BANGKOK IPITEX 2027 ｜ KAOHSIUNG KIDE 2026</text>
        </svg>
      )}

      {/* 7. E-COMMERCE RFM & BI (Slide 13: 各客群顧客占比 vs 營收占比 & 互動儀表板) */}
      {theme === 'rfm-analytics' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="rfm-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E131F" />
              <stop offset="50%" stopColor="#0A0D15" />
              <stop offset="100%" stopColor="#07090E" />
            </linearGradient>
            <linearGradient id="rfm-vip-gold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="rfm-client-blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <filter id="rfm-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Background */}
          <rect width="800" height="500" fill="url(#rfm-bg-grad)" />

          {/* Top Window Chrome Header with real Google Apps Script URL & GitHub repo */}
          <rect width="800" height="38" fill="#131926" stroke="#1F293D" strokeWidth="0.8" />
          <circle cx="20" cy="19" r="4.5" fill="#EF4444" />
          <circle cx="34" cy="19" r="4.5" fill="#F59E0B" />
          <circle cx="48" cy="19" r="4.5" fill="#10B981" />

          {/* Browser Address Bar with Google Apps Script URL */}
          <g transform="translate(68, 7)">
            <rect width="520" height="24" rx="6" fill="#0C101A" stroke="#25324A" strokeWidth="0.8" />
            <circle cx="14" cy="12" r="2.5" fill="#10B981" />
            <text x="24" y="16" fill="#38BDF8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="500">
              script.google.com/macros/s/AKfycbzJpt1QhyBJtfJzkzOGebXk5obPGzD_gGKDseyc0Q18/dev
            </text>
          </g>

          {/* GitHub badge */}
          <g transform="translate(600, 7)">
            <rect width="180" height="24" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="0.8" />
            <text x="12" y="16" fill="#F8FAFC" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              GitHub: 911097/114-2Fin
            </text>
          </g>

          {/* ================= SINGLE UNIFIED DASHBOARD CHART: 各客群顧客占比 vs 營收貢獻 ================= */}
          <g transform="translate(30, 48)">
            {/* Unified Main Dashboard Container Panel */}
            <rect width="740" height="436" rx="8" fill="#111624" stroke="#1E283D" strokeWidth="1" filter="url(#rfm-glow)" />

            {/* Top Dashboard Header & Legend */}
            <g transform="translate(24, 22)">
              <text x="0" y="0" fill="#FFFFFF" fontSize="13.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
                E-COMMERCE RFM 顧客分群與營收貢獻分析 ｜ 541,909 筆交易資料
              </text>
              <text x="0" y="16" fill="#94A3B8" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">
                UCI Online Retail · 4,338 位有效顧客 · PERCENTILE 等頻切分 1–5 分
              </text>

              {/* Legend */}
              <g transform="translate(460, -4)">
                <circle cx="0" cy="5" r="4.5" fill="#38BDF8" />
                <text x="10" y="9" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">顧客人數占比 (%)</text>
                <circle cx="120" cy="5" r="4.5" fill="#E5A84B" />
                <text x="130" y="9" fill="#E5A84B" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">營收金額占比 (%)</text>
              </g>
            </g>

            {/* KPI Metric Strip */}
            <g transform="translate(24, 52)">
              {/* Metric 1 */}
              <g transform="translate(0, 0)">
                <rect width="165" height="46" rx="5" fill="#0C101A" stroke="#1F2A40" strokeWidth="0.8" />
                <text x="12" y="17" fill="#64748B" fontSize="8" fontFamily="'JetBrains Mono', monospace">原始交易總量</text>
                <text x="12" y="36" fill="#F8FAFC" fontSize="13" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">541,909 筆</text>
                <text x="155" y="32" textAnchor="end" fill="#475569" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">UCI Retail</text>
              </g>
              {/* Metric 2 */}
              <g transform="translate(176, 0)">
                <rect width="165" height="46" rx="5" fill="#0C101A" stroke="#1F2A40" strokeWidth="0.8" />
                <text x="12" y="17" fill="#64748B" fontSize="8" fontFamily="'JetBrains Mono', monospace">清洗後有效顧客</text>
                <text x="12" y="36" fill="#38BDF8" fontSize="13" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">4,338 人</text>
                <text x="155" y="32" textAnchor="end" fill="#475569" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">剔除無ID/退貨</text>
              </g>
              {/* Metric 3 (VIP Highlight) */}
              <g transform="translate(352, 0)">
                <rect width="175" height="46" rx="5" fill="#1A150D" stroke="#E5A84B" strokeWidth="1" />
                <text x="12" y="17" fill="#E5A84B" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">★ VIP 營收貢獻占比</text>
                <text x="12" y="36" fill="#FDE047" fontSize="13.5" fontFamily="'JetBrains Mono', monospace" fontWeight="800">62.0% (848人)</text>
                <text x="165" y="32" textAnchor="end" fill="#D97706" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">二八法則</text>
              </g>
              {/* Metric 4 */}
              <g transform="translate(538, 0)">
                <rect width="154" height="46" rx="5" fill="#0C101A" stroke="#1F2A40" strokeWidth="0.8" />
                <text x="12" y="17" fill="#64748B" fontSize="8" fontFamily="'JetBrains Mono', monospace">流失客戶營收占比</text>
                <text x="12" y="36" fill="#F87171" fontSize="13" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">5.4% (1,307人)</text>
                <text x="144" y="32" textAnchor="end" fill="#475569" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">沉睡/流失</text>
              </g>
            </g>

            {/* Main Expansive Chart Area */}
            <g transform="translate(24, 118)">
              {/* Inner Chart Frame */}
              <rect width="692" height="262" rx="6" fill="#0D111C" stroke="#192236" strokeWidth="0.8" />

              {/* Y-Axis Grid Lines & Values */}
              <g transform="translate(42, 28)">
                {/* 60% line */}
                <text x="0" y="8" textAnchor="end" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">60%</text>
                <line x1="8" y1="5" x2="628" y2="5" stroke="#1E283D" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* 40% line */}
                <text x="0" y="65" textAnchor="end" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">40%</text>
                <line x1="8" y1="62" x2="628" y2="62" stroke="#1E283D" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* 20% line */}
                <text x="0" y="122" textAnchor="end" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">20%</text>
                <line x1="8" y1="119" x2="628" y2="119" stroke="#1E283D" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* 0% baseline */}
                <text x="0" y="179" textAnchor="end" fill="#64748B" fontSize="9.5" fontFamily="'JetBrains Mono', monospace">0%</text>
                <line x1="8" y1="176" x2="628" y2="176" stroke="#334155" strokeWidth="1.2" />

                {/* ---- GROUP 1: 重要客戶 (35.2% vs 24.8%) ---- */}
                <g transform="translate(48, 0)">
                  {/* 顧客占比: 35.2% (height ~ 100px) */}
                  <rect x="0" y="76" width="40" height="100" rx="3.5" fill="url(#rfm-client-blue)" />
                  <text x="20" y="68" textAnchor="middle" fill="#7DD3FC" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">35.2%</text>
                  {/* 營收占比: 24.8% (height ~ 70px) */}
                  <rect x="46" y="106" width="40" height="70" rx="3.5" fill="#D97706" />
                  <text x="66" y="98" textAnchor="middle" fill="#FCD34D" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">24.8%</text>
                  {/* Titles */}
                  <text x="43" y="196" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">重要客戶</text>
                  <text x="43" y="210" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">1,527人 ‧ 次要營收支柱</text>
                </g>

                {/* ---- GROUP 2: VIP 客群 (19.6% vs 62.0%) [CORE HIGHLIGHT] ---- */}
                <g transform="translate(200, 0)">
                  {/* 顧客占比: 19.6% (height ~ 56px) */}
                  <rect x="0" y="120" width="40" height="56" rx="3.5" fill="url(#rfm-client-blue)" />
                  <text x="20" y="112" textAnchor="middle" fill="#7DD3FC" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">19.6%</text>
                  {/* 營收占比: 62.0% (height ~ 176px) */}
                  <rect x="46" y="0" width="40" height="176" rx="3.5" fill="url(#rfm-vip-gold)" />
                  <text x="66" y="-8" textAnchor="middle" fill="#FDE047" fontSize="13.5" fontFamily="'JetBrains Mono', monospace" fontWeight="900">62.0%</text>
                  
                  {/* VIP Luminous Badge Callout */}
                  <g transform="translate(94, 18)">
                    <rect width="84" height="22" rx="4" fill="#E5A84B" fillOpacity="0.2" stroke="#E5A84B" strokeWidth="1" />
                    <text x="42" y="15" textAnchor="middle" fill="#FDE047" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">848人 貢獻62%</text>
                  </g>
                  {/* Titles */}
                  <text x="43" y="196" textAnchor="middle" fill="#FDE047" fontSize="11.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">★ VIP (高價值客群)</text>
                  <text x="43" y="210" textAnchor="middle" fill="#E5A84B" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">848人 ‧ 二八法則核心客群</text>
                </g>

                {/* ---- GROUP 3: 高消費客 (15.1% vs 7.9%) ---- */}
                <g transform="translate(362, 0)">
                  {/* 顧客占比: 15.1% (height ~ 43px) */}
                  <rect x="0" y="133" width="40" height="43" rx="3.5" fill="url(#rfm-client-blue)" />
                  <text x="20" y="125" textAnchor="middle" fill="#7DD3FC" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">15.1%</text>
                  {/* 營收占比: 7.9% (height ~ 22px) */}
                  <rect x="46" y="154" width="40" height="22" rx="3.5" fill="#D97706" />
                  <text x="66" y="146" textAnchor="middle" fill="#FCD34D" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">7.9%</text>
                  {/* Titles */}
                  <text x="43" y="196" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">高消費客</text>
                  <text x="43" y="210" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">656人 ‧ 客單價高頻次回購</text>
                </g>

                {/* ---- GROUP 4: 流失客戶 (30.1% vs 5.4%) ---- */}
                <g transform="translate(512, 0)">
                  {/* 顧客占比: 30.1% (height ~ 86px) */}
                  <rect x="0" y="90" width="40" height="86" rx="3.5" fill="url(#rfm-client-blue)" />
                  <text x="20" y="82" textAnchor="middle" fill="#7DD3FC" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">30.1%</text>
                  {/* 營收占比: 5.4% (height ~ 15px) */}
                  <rect x="46" y="161" width="40" height="15" rx="3.5" fill="#D97706" />
                  <text x="66" y="153" textAnchor="middle" fill="#FCD34D" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">5.4%</text>
                  {/* Titles */}
                  <text x="43" y="196" textAnchor="middle" fill="#CBD5E1" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">流失客戶</text>
                  <text x="43" y="210" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">1,307人 ‧ 沉睡喚回或資源止血</text>
                </g>
              </g>
            </g>

            {/* Bottom Single Unified Status Line */}
            <g transform="translate(24, 412)">
              <rect width="692" height="16" fill="transparent" />
              <text x="6" y="0" fill="#94A3B8" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
                ● 儀錶板呈現：Google Apps Script 互動 Web App ｜ 原始碼與資料集：github.com/911097/114-2Fin
              </text>
              <text x="686" y="0" textAnchor="end" fill="#64748B" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
                Power BI (pbix) ‧ PERCENTILE 等頻切分 1–5 分
              </text>
            </g>
          </g>
        </svg>
      )}

      {/* 8. Supply Chain */}
      {theme === 'supply-chain' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#0B1017" />
          <text x="60" y="70" fill="#F8FAFC" fontSize="18" fontFamily="'Instrument Serif', serif">NIKE SUPPLY CHAIN RISK HEATMAP</text>
          <g transform="translate(60, 130)">
            <rect width="210" height="70" rx="4" fill="#EF4444" />
            <text x="14" y="26" fill="#FFFFFF" fontSize="11" fontFamily="'JetBrains Mono', monospace">HIGH RISK // 北美關稅</text>
            <text x="14" y="46" fill="#FEE2E2" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif">毛利 44.6% → 40.2% 下滑</text>
          </g>
          <g transform="translate(290, 130)">
            <rect width="210" height="70" rx="4" fill="#EF4444" />
            <text x="14" y="26" fill="#FFFFFF" fontSize="11" fontFamily="'JetBrains Mono', monospace">HIGH RISK // 越南集中度</text>
            <text x="14" y="46" fill="#FEE2E2" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif">產能 51% 集中 · 單點斷鏈</text>
          </g>
          <g transform="translate(520, 130)">
            <rect width="210" height="70" rx="4" fill="#D97706" />
            <text x="14" y="26" fill="#FFFFFF" fontSize="11" fontFamily="'JetBrains Mono', monospace">MED RISK // 大中華市場</text>
            <text x="14" y="46" fill="#FEF3C7" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif">本土品牌競爭與政治敏感</text>
          </g>
          <text x="740" y="470" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">NIKE FY2022–FY2025 10-K & FY2026 Q3 財報</text>
        </svg>
      )}

      {/* 9. SmartFit Mirror */}
      {theme === 'smartfit-mirror' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#15171C" />
          <rect x="120" y="60" width="160" height="340" rx="16" fill="#090B0E" stroke="#475569" strokeWidth="3" />
          <rect x="132" y="76" width="136" height="308" rx="8" fill="#1E232E" />
          <text x="200" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontFamily="'Instrument Serif', serif">SMARTFIT</text>
          <circle cx="200" cy="190" r="36" fill="none" stroke="#10B981" strokeWidth="3" />
          <text x="200" y="196" textAnchor="middle" fill="#10B981" fontSize="16" fontFamily="'JetBrains Mono', monospace">128</text>
          <text x="200" y="210" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace">BPM</text>
          <text x="200" y="340" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontFamily="'JetBrains Mono', monospace">NT$39,800 標準版</text>

          <g transform="translate(340, 70)">
            <text x="0" y="20" fill="#FFFFFF" fontSize="18" fontFamily="'Instrument Serif', serif">36-PAGE BUSINESS PLAN</text>
            <text x="0" y="42" fill="#94A3B8" fontSize="11" fontFamily="'JetBrains Mono', monospace">損益兩平點：370 台（初始投入 700-800 萬）</text>
            <text x="0" y="62" fill="#10B981" fontSize="11" fontFamily="'JetBrains Mono', monospace">單位毛利 NT$21,800（變動成本約 18,000）</text>
            <rect x="0" y="130" width="100" height="24" rx="3" fill="#3B82F6" />
            <text x="110" y="146" fill="#F8FAFC" fontSize="11" fontFamily="'JetBrains Mono', monospace">Y1: 600 萬</text>
            <rect x="0" y="165" width="200" height="24" rx="3" fill="#60A5FA" />
            <text x="210" y="181" fill="#F8FAFC" fontSize="11" fontFamily="'JetBrains Mono', monospace">Y2: 1,200 萬 (+100%)</text>
            <rect x="0" y="200" width="310" height="24" rx="3" fill="#93C5FD" />
            <text x="320" y="216" fill="#F8FAFC" fontSize="11" fontFamily="'JetBrains Mono', monospace">Y3: 2,000 萬 (+66.7%)</text>
          </g>
          <text x="760" y="470" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">AI 行銷課提示詞工程 延伸商業全案</text>
        </svg>
      )}

      {/* 10. LT Architects (單張真實網站截圖示意 · 911097.github.io/LT-Architects) */}
      {theme === 'lt-architects' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lt-sky-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B202A" />
              <stop offset="35%" stopColor="#11141A" />
              <stop offset="100%" stopColor="#080A0E" />
            </linearGradient>
            <linearGradient id="lt-glass-facet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2E3746" />
              <stop offset="30%" stopColor="#1E242F" />
              <stop offset="70%" stopColor="#141820" />
              <stop offset="100%" stopColor="#0B0D12" />
            </linearGradient>
            <linearGradient id="lt-cantilever-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5A84B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E5A84B" stopOpacity="0" />
            </linearGradient>
            <filter id="lt-browser-shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Full Browser Window Frame */}
          <rect width="800" height="500" fill="#0C0E13" />

          {/* Browser Chrome Header (Toolbar & Tabs) */}
          <rect width="800" height="40" fill="#14171E" stroke="#222834" strokeWidth="0.8" />
          
          {/* Mac-style Window Controls */}
          <circle cx="22" cy="20" r="4.5" fill="#EF4444" />
          <circle cx="36" cy="20" r="4.5" fill="#F59E0B" />
          <circle cx="50" cy="20" r="4.5" fill="#10B981" />

          {/* Active Browser Tab */}
          <path d="M72,40 L84,10 L246,10 L258,40 Z" fill="#0C0E13" />
          <rect x="94" y="21" width="8" height="6.5" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
          <text x="108" y="24" fill="#E2E8F0" fontSize="9.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="500">
            LT ARCHITECTS — Boston
          </text>

          {/* Browser URL Address Bar */}
          <rect x="270" y="9" width="360" height="22" rx="11" fill="#1B202B" stroke="#2A3142" strokeWidth="0.8" />
          <g transform="translate(282, 14)">
            {/* Padlock icon */}
            <path d="M2.5,5 L2.5,3 C2.5,1.6 3.6,0.5 5,0.5 C6.4,0.5 7.5,1.6 7.5,3 L7.5,5" fill="none" stroke="#10B981" strokeWidth="1" />
            <rect x="1" y="4.5" width="8" height="6" rx="1" fill="#10B981" />
          </g>
          <text x="298" y="24" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">
            https://911097.github.io/LT-Architects/
          </text>

          {/* Viewport Content: Real Website Page */}
          <g transform="translate(0, 40)">
            {/* Top Navigation Bar */}
            <rect width="800" height="52" fill="#0C0E13" opacity="0.95" />
            <line x1="0" y1="52" x2="800" y2="52" stroke="#1A1F29" strokeWidth="0.8" />

            {/* Brand Logo [LT] ARCHITECTS */}
            <g transform="translate(36, 18)">
              <rect x="0" y="0" width="22" height="17" fill="none" stroke="#D4AF37" strokeWidth="1.2" />
              <text x="11" y="12.5" textAnchor="middle" fill="#D4AF37" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" fontWeight="bold">LT</text>
              <text x="30" y="13.5" fill="#F8FAFC" fontSize="13" fontFamily="'Cinzel', serif" letterSpacing="0.18em" fontWeight="bold">ARCHITECTS</text>
            </g>

            {/* Navigation Links */}
            <g transform="translate(560, 30)">
              <text x="0" y="0" fill="#D4AF37" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.14em" fontWeight="600">PORTFOLIO</text>
              <line x1="0" y1="4" x2="68" y2="4" stroke="#D4AF37" strokeWidth="1.5" />
              <text x="100" y="0" fill="#8892A0" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.14em">ABOUT</text>
              <text x="175" y="0" fill="#8892A0" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.14em">NEWS</text>
            </g>

            {/* Main Stage: Cinematic Architectural Photography Layout */}
            <g transform="translate(36, 76)">
              {/* Left Editorial Info */}
              <g transform="translate(0, 20)">
                <text x="0" y="0" fill="#6A7587" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.2em">
                  LT ARCHITECTS
                </text>
                <text x="0" y="18" fill="#D4AF37" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.18em" fontWeight="600">
                  FEATURED PROJECTS
                </text>

                {/* Counter & Project Title */}
                <text x="0" y="74" fill="#64748B" fontSize="11" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.08em">
                  01 / 35
                </text>
                <text x="0" y="115" fill="#FFFFFF" fontSize="38" fontFamily="'Instrument Serif', Georgia, serif" fontWeight="normal" letterSpacing="-0.02em">
                  ECL Hall
                </text>
                <text x="0" y="142" fill="#94A3B8" fontSize="16" fontFamily="'Instrument Serif', Georgia, serif" fontStyle="italic">
                  boston, massachusetts
                </text>

                {/* Concept philosophy line */}
                <g transform="translate(0, 180)">
                  <rect x="0" y="0" width="220" height="26" rx="4" fill="#D4AF37" fillOpacity="0.08" stroke="#D4AF37" strokeWidth="0.8" />
                  <text x="10" y="16.5" fill="#D4AF37" fontSize="8.5" fontFamily="'Noto Sans TC', sans-serif">
                    深色底、金色小字，圖放大，文字退後
                  </text>
                </g>

                {/* CTA Link */}
                <g transform="translate(0, 235)">
                  <text x="0" y="0" fill="#D4AF37" fontSize="10.5" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.12em" fontWeight="600">
                    VIEW PROJECT ↗
                  </text>
                  <line x1="0" y1="4" x2="108" y2="4" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
                </g>
              </g>

              {/* Right Large Hero Architecture Photograph Mockup */}
              <g transform="translate(260, 0)">
                {/* Photo Container Frame with Shadow */}
                <rect width="468" height="295" rx="6" fill="url(#lt-sky-grad)" stroke="#1F2533" strokeWidth="1" />
                
                {/* Dramatic Skyscraper Perspective Facade */}
                <polygon points="190,295 280,0 400,0 460,295" fill="url(#lt-glass-facet)" />
                <polygon points="70,295 190,295 280,0 170,0" fill="#151A22" />
                
                {/* Vertical Steel Mullions (perspective converge to sky) */}
                <line x1="205" y1="295" x2="290" y2="0" stroke="#374357" strokeWidth="1" />
                <line x1="240" y1="295" x2="310" y2="0" stroke="#3D4B62" strokeWidth="1" />
                <line x1="280" y1="295" x2="335" y2="0" stroke="#4C5D7A" strokeWidth="1" />
                <line x1="325" y1="295" x2="365" y2="0" stroke="#60769B" strokeWidth="1.2" />
                <line x1="375" y1="295" x2="400" y2="0" stroke="#7A93BD" strokeWidth="1.2" />
                <line x1="420" y1="295" x2="435" y2="0" stroke="#9BB2DC" strokeWidth="1.2" />

                {/* Horizontal Floor Slabs & Window Light Rows */}
                <line x1="160" y1="240" x2="455" y2="240" stroke="#252D3B" strokeWidth="0.8" />
                <line x1="180" y1="195" x2="445" y2="195" stroke="#2A3444" strokeWidth="0.8" />
                <line x1="200" y1="150" x2="435" y2="150" stroke="#2F3B4D" strokeWidth="0.8" />
                <line x1="220" y1="105" x2="425" y2="105" stroke="#354256" strokeWidth="0.8" />
                <line x1="240" y1="60" x2="415" y2="60" stroke="#3B495F" strokeWidth="0.8" />

                {/* Warm Interior Lighting in Upper Floors */}
                <rect x="295" y="153" width="34" height="6" fill="#E5A84B" opacity="0.65" />
                <rect x="345" y="108" width="40" height="6" fill="#E5A84B" opacity="0.5" />
                <rect x="340" y="63" width="28" height="5" fill="#E5A84B" opacity="0.75" />

                {/* Foreground Cantilevered Modern Glass Pavilion */}
                <g transform="translate(10, 155)">
                  {/* Massing & Terrace */}
                  <polygon points="0,140 40,35 240,35 250,140" fill="#141820" stroke="#252C3A" strokeWidth="0.8" />
                  <rect x="30" y="60" width="190" height="35" fill="#191F2B" stroke="#323C4E" strokeWidth="1" />
                  {/* Glass Balustrade */}
                  <rect x="30" y="50" width="190" height="15" fill="#8AB4F8" fillOpacity="0.25" stroke="#8AB4F8" strokeWidth="0.6" />
                  {/* Warm Glowing Architectural Interior */}
                  <rect x="45" y="70" width="38" height="20" fill="#E5A84B" opacity="0.85" />
                  <rect x="95" y="70" width="55" height="20" fill="#E5A84B" opacity="0.6" />
                  <rect x="160" y="70" width="45" height="20" fill="#E5A84B" opacity="0.9" />
                  {/* Soft Light Spill on Deck */}
                  <polygon points="30,95 220,95 240,140 10,140" fill="url(#lt-cantilever-glow)" />
                </g>

                {/* Photo Watermark Badge */}
                <g transform="translate(365, 260)">
                  <rect width="90" height="22" rx="3" fill="#0C0E13" fillOpacity="0.85" stroke="#222834" strokeWidth="0.8" />
                  <text x="45" y="15" textAnchor="middle" fill="#D4AF37" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
                    BOSTON · 2024
                  </text>
                </g>
              </g>
            </g>

            {/* Bottom Subtle Status Bar of Website */}
            <g transform="translate(36, 388)">
              <line x1="0" y1="0" x2="728" y2="0" stroke="#161B24" strokeWidth="0.8" />
              <text x="0" y="16" fill="#4B5565" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
                PROJECT 01 / 35 — ECL HALL BOSTON ｜ ARCHITECTURAL WORKS
              </text>
              <text x="728" y="16" textAnchor="end" fill="#6A7587" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
                SCROLL TO EXPLORE ↓
              </text>
            </g>
          </g>
        </svg>
      )}

      {/* 11. Ancient Luoyang RWD */}
      {theme === 'rwd-luoyang' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#F8F8F5" />
          <g transform="translate(60, 80)">
            <rect width="440" height="300" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2" />
            <rect width="440" height="28" rx="6" fill="#F1F5F9" />
            <text x="220" y="18" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="'JetBrains Mono', monospace">DESKTOP VIEW (1440px)</text>
            <text x="30" y="65" fill="#0F172A" fontSize="16" fontFamily="'Instrument Serif', serif">古都洛陽 · 歷史文化巡禮</text>
            <line x1="30" y1="80" x2="410" y2="80" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="30" y="95" width="115" height="150" fill="#F8FAFC" stroke="#E2E8F0" />
            <rect x="160" y="95" width="115" height="150" fill="#F8FAFC" stroke="#E2E8F0" />
            <rect x="290" y="95" width="115" height="150" fill="#F8FAFC" stroke="#E2E8F0" />
          </g>
          <g transform="translate(540, 80)">
            <rect width="180" height="320" rx="14" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
            <text x="90" y="32" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="'JetBrains Mono', monospace">MOBILE 375px</text>
            <rect x="15" y="45" width="150" height="40" fill="#F1F5F9" />
            <rect x="15" y="95" width="150" height="60" fill="#F8FAFC" stroke="#E2E8F0" />
          </g>
          <text x="60" y="450" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">純手寫原生 HTML / CSS 響應式網頁排版設計</text>
        </svg>
      )}

      {/* 12. 3D White Model */}
      {theme === 'white-model-3d' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#202226" />
          <polygon points="400,160 520,220 400,280 280,220" fill="#D8DCE3" stroke="#8A92A0" strokeWidth="1" />
          <polygon points="280,220 400,280 400,320 280,260" fill="#A8B0BE" stroke="#8A92A0" strokeWidth="1" />
          <polygon points="400,280 520,220 520,260 400,320" fill="#8A92A0" stroke="#8A92A0" strokeWidth="1" />
          <polygon points="400,90 440,150 360,150" fill="#ECEFF4" stroke="#8A92A0" strokeWidth="1" />
          <rect x="60" y="60" width="180" height="70" rx="4" fill="#181A1D" stroke="#373B43" strokeWidth="1" />
          <text x="75" y="85" fill="#E2E8F0" fontSize="11" fontFamily="'JetBrains Mono', monospace">3DS MAX VIEWPORT</text>
          <text x="75" y="105" fill="#94A3B8" fontSize="9" fontFamily="'JetBrains Mono', monospace">SHADING: CLAY WHITE</text>
          <text x="760" y="470" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">空間幾何配置與白模結構建模</text>
        </svg>
      )}

      {/* 13. Anonymous Tracking System UI Mockup */}
      {theme === 'anonymous-tracking-ui' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="anon-dark-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B0E14" />
              <stop offset="100%" stopColor="#07090E" />
            </linearGradient>
            <pattern id="monitor-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#161B28" strokeWidth="0.6" opacity="0.6" />
            </pattern>
          </defs>

          {/* Background */}
          <rect width="800" height="500" fill="url(#anon-dark-bg)" />
          <rect width="800" height="500" fill="url(#monitor-grid)" />

          {/* Top Window Titlebar */}
          <rect width="800" height="34" fill="#131722" stroke="#1C2333" strokeWidth="1" />
          <text x="24" y="21" fill="#94A3B8" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="500">
            Anonymous Tracking System v2.0
          </text>
          <g transform="translate(730, 11)">
            <line x1="0" y1="6" x2="10" y2="6" stroke="#64748B" strokeWidth="1.2" />
            <rect x="18" y="1" width="10" height="10" fill="none" stroke="#64748B" strokeWidth="1.2" />
            <path d="M36,1 L46,11 M46,1 L36,11" stroke="#94A3B8" strokeWidth="1.2" />
          </g>

          {/* Live Camera Viewport Perspective Wireframe */}
          <line x1="40" y1="380" x2="490" y2="380" stroke="#1A2234" strokeWidth="1" />
          <line x1="80" y1="180" x2="20" y2="440" stroke="#151C2C" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="420" y1="180" x2="490" y2="440" stroke="#151C2C" strokeWidth="1" strokeDasharray="4 4" />

          {/* Restricted Zone Marker in Cyan */}
          <rect x="180" y="230" width="300" height="180" rx="3" fill="#06B6D4" fillOpacity="0.05" stroke="#06B6D4" strokeWidth="1.2" strokeDasharray="6 4" />
          <text x="195" y="252" fill="#22D3EE" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.08em">
            RESTRICTED ZONE // OVERSTAY LIMIT
          </text>

          {/* Tracked Target: Person Bounding Box & Keypoints (Anon_User_0003) */}
          <g transform="translate(130, 80)">
            {/* Box Header Badge */}
            <rect x="0" y="0" width="130" height="20" rx="2" fill="#10B981" />
            <text x="65" y="14" textAnchor="middle" fill="#07090E" fontSize="9.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
              Anon_User_0003 | 86%
            </text>

            {/* Person Bounding Rectangle */}
            <rect x="0" y="20" width="130" height="280" rx="2" fill="#10B981" fillOpacity="0.04" stroke="#10B981" strokeWidth="1.5" />

            {/* HEAD EXCLUSION Box (HEAD_EXCLUSION_RATIO = 0.25) */}
            <rect x="35" y="28" width="60" height="45" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="3 2" />
            <text x="65" y="55" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              HEAD EXCLUDED
            </text>

            {/* Pose Skeleton Structure */}
            <g stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {/* Spine */}
              <line x1="65" y1="73" x2="65" y2="155" />
              {/* Shoulders */}
              <line x1="38" y1="95" x2="92" y2="95" />
              {/* Left Arm */}
              <line x1="38" y1="95" x2="28" y2="135" />
              <line x1="28" y1="135" x2="24" y2="180" />
              {/* Right Arm */}
              <line x1="92" y1="95" x2="102" y2="135" />
              <line x1="102" y1="135" x2="106" y2="180" />
              {/* Pelvis */}
              <line x1="48" y1="155" x2="82" y2="155" />
              {/* Left Leg */}
              <line x1="48" y1="155" x2="45" y2="220" />
              <line x1="45" y1="220" x2="48" y2="285" />
              {/* Right Leg */}
              <line x1="82" y1="155" x2="85" y2="220" />
              <line x1="85" y1="220" x2="82" y2="285" />
            </g>

            {/* Joint Dots */}
            <circle cx="65" cy="73" r="3" fill="#38BDF8" />
            <circle cx="38" cy="95" r="3" fill="#38BDF8" />
            <circle cx="92" cy="95" r="3" fill="#38BDF8" />
            <circle cx="28" cy="135" r="2.5" fill="#38BDF8" />
            <circle cx="102" cy="135" r="2.5" fill="#38BDF8" />
            <circle cx="24" cy="180" r="2.5" fill="#38BDF8" />
            <circle cx="106" cy="180" r="2.5" fill="#38BDF8" />
            <circle cx="48" cy="155" r="3" fill="#38BDF8" />
            <circle cx="82" cy="155" r="3" fill="#38BDF8" />
            <circle cx="45" cy="220" r="3" fill="#38BDF8" />
            <circle cx="85" cy="220" r="3" fill="#38BDF8" />
            <circle cx="48" cy="285" r="3" fill="#38BDF8" />
            <circle cx="82" cy="285" r="3" fill="#38BDF8" />
          </g>

          {/* Right Floating System Monitor HUD Panel */}
          <g transform="translate(515, 48)">
            <rect width="260" height="420" rx="8" fill="#10141E" stroke="#1D2436" strokeWidth="1" />

            {/* Section 1: System Monitor */}
            <text x="18" y="28" fill="#38BDF8" fontSize="11" fontWeight="700" fontFamily="'JetBrains Mono', monospace">
              [ SYSTEM MONITOR ]
            </text>
            <text x="18" y="52" fill="#94A3B8" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              FPS       : <tspan fill="#E2E8F0">7.6</tspan>
            </text>
            <text x="18" y="72" fill="#94A3B8" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              Frame     : <tspan fill="#E2E8F0">004641</tspan> / 13,959
            </text>
            <text x="18" y="92" fill="#94A3B8" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              Active IDs: <tspan fill="#E2E8F0">2</tspan>
            </text>
            <text x="18" y="112" fill="#94A3B8" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              Total IDs : <tspan fill="#E2E8F0">2</tspan>
            </text>
            <text x="18" y="132" fill="#94A3B8" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              ID Switch : <tspan fill="#10B981" fontWeight="700">0</tspan>
            </text>

            <line x1="18" y1="148" x2="242" y2="148" stroke="#1D2436" strokeWidth="1" />

            {/* Section 2: Active Targets */}
            <text x="18" y="172" fill="#38BDF8" fontSize="11" fontWeight="700" fontFamily="'JetBrains Mono', monospace">
              [ ACTIVE TARGETS ]
            </text>
            <text x="18" y="196" fill="#10B981" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              Anon_0001 (Walking)
            </text>
            <text x="18" y="216" fill="#10B981" fontSize="10.5" fontFamily="'JetBrains Mono', monospace">
              Anon_0003 (Static)
            </text>

            <line x1="18" y1="234" x2="242" y2="234" stroke="#1D2436" strokeWidth="1" />

            {/* Section 3: Feature & Threshold Specs */}
            <text x="18" y="258" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">
              ReID Thresh   : 0.65
            </text>
            <text x="18" y="278" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">
              Feature Vector: 28D (Target 34D)
            </text>
            <text x="18" y="298" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">
              Dynamic Gate  : ACTIVE
            </text>

            {/* Gold Highlight Point 1: Overstay Limit Alert Box */}
            <g transform="translate(18, 324)">
              <rect width="224" height="34" rx="4" fill="#E5A84B" fillOpacity="0.12" stroke="#E5A84B" strokeWidth="1" />
              <text x="112" y="21" textAnchor="middle" fill="#E5A84B" fontSize="10" fontWeight="700" fontFamily="'JetBrains Mono', monospace">
                OVERSTAY LIMIT: 90 FRAMES (~12s)
              </text>
            </g>

            {/* Bottom System Identity */}
            <text x="18" y="388" fill="#475569" fontSize="9" fontFamily="'JetBrains Mono', monospace">
              Smart Hospital AnonymousReID v2.0
            </text>
            <text x="18" y="402" fill="#475569" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
              Privacy-Safe · No Face Data
            </text>
          </g>

          {/* Gold Highlight Point 2: Bottom Status Banner & Corner Pin */}
          <g transform="translate(30, 462)">
            <rect x="0" y="-8" width="6" height="6" fill="#E5A84B" />
            <text x="16" y="-3" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">
              RTX 5060 ｜ YOLOv8n ｜ 13,959 FRAMES VALIDATED
            </text>
          </g>
        </svg>
      )}

      {/* Default fallback */}
      {theme === 'print-isometric' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#F6F4EE" />
          <rect x="100" y="100" width="180" height="260" rx="4" fill="#991B1B" />
          <circle cx="190" cy="190" r="30" fill="#B91C1C" stroke="#FDE047" strokeWidth="1.5" />
          <text x="190" y="196" textAnchor="middle" fill="#FEF08A" fontSize="18" fontFamily="'Instrument Serif', serif">新年快樂</text>
          <text x="760" y="470" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">實體印刷排版 ｜ 對折賀卡</text>
        </svg>
      )}
    </div>
  );
};
