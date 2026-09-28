import React from 'react';

interface ProjectArtProps {
  theme: 'system-dev' | 'visual-design' | 'ui-ux-phone' | 'campus-branding' | 'mobile-wallet' | 'infographic-poster' | 'hospital-sensing' | 'rehab-skeleton' | 'safety-surveillance' | 'rfm-analytics' | 'supply-chain' | 'smartfit-mirror' | 'lt-architects' | 'rwd-luoyang' | 'app-ui' | 'elderly-care' | 'white-model-3d' | 'print-isometric';
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

      {/* 7. RFM Analytics */}
      {theme === 'rfm-analytics' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#FAFAF8" />
          <g transform="translate(240, 240)">
            <circle cx="0" cy="0" r="120" fill="none" stroke="#E2E8F0" strokeWidth="48" />
            <circle cx="0" cy="0" r="120" fill="none" stroke="#F87171" strokeWidth="48" strokeDasharray="385 754" strokeDashoffset="0" />
            <circle cx="0" cy="0" r="120" fill="none" stroke="#34D399" strokeWidth="48" strokeDasharray="283 754" strokeDashoffset="-385" />
            <circle cx="0" cy="0" r="120" fill="none" stroke="#3B82F6" strokeWidth="48" strokeDasharray="31 754" strokeDashoffset="-668" />
            <circle cx="0" cy="0" r="120" fill="none" stroke="#FBBF24" strokeWidth="48" strokeDasharray="53 754" strokeDashoffset="-699" />
            <text x="0" y="-8" textAnchor="middle" fill="#0F172A" fontSize="24" fontFamily="'Instrument Serif', serif">58,115</text>
            <text x="0" y="16" textAnchor="middle" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">VALID CLIENTS</text>
          </g>
          <g transform="translate(480, 140)">
            <text x="0" y="0" fill="#0F172A" fontSize="13" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">顧客地區分布（北部 6 大市占 81.1%）</text>
            <rect x="0" y="40" width="220" height="18" rx="3" fill="#3B82F6" />
            <text x="230" y="54" fill="#0F172A" fontSize="11" fontFamily="'JetBrains Mono', monospace">81.1%</text>
            <rect x="0" y="70" width="80" height="18" rx="3" fill="#94A3B8" />
            <text x="90" y="84" fill="#64748B" fontSize="11" fontFamily="'JetBrains Mono', monospace">中南部 18.9%</text>
            
            <rect x="0" y="120" width="260" height="90" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <text x="14" y="142" fill="#0F172A" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">Persona 代表：林志豪（38 歲）</text>
            <text x="14" y="162" fill="#475569" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif">科技業中階主管 · 高客單運動補劑</text>
            <text x="14" y="180" fill="#2563EB" fontSize="10" fontFamily="'JetBrains Mono', monospace">STRATEGY: VIP 尊榮私廚推播</text>
          </g>
          <text x="60" y="470" fill="#64748B" fontSize="10" fontFamily="'JetBrains Mono', monospace">POWER BI ｜ 238,744 筆清理後交易明細</text>
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

      {/* 10. LT Architects */}
      {theme === 'lt-architects' && (
        <svg viewBox="0 0 800 500" className="w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
          <rect width="800" height="500" fill="#111113" />
          <rect x="80" y="60" width="640" height="380" fill="#17171A" stroke="#26262B" strokeWidth="1" />
          <text x="120" y="110" fill="#D4AF37" fontSize="13" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.2em">LT ARCHITECTS</text>
          <text x="120" y="170" fill="#FFFFFF" fontSize="32" fontFamily="'Instrument Serif', serif">BOSTON ECL HALL</text>
          <text x="120" y="196" fill="#888890" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif">Concept：深色底、金色小字，圖放大，文字退後。</text>
          <rect x="360" y="90" width="320" height="240" fill="#202025" stroke="#33333A" strokeWidth="1" />
          <polygon points="360,330 460,180 540,240 680,120 680,330" fill="#2E2E36" opacity="0.8" />
          <text x="660" y="315" textAnchor="end" fill="#D4AF37" fontSize="10" fontFamily="'JetBrains Mono', monospace">01 / 35</text>
          <text x="120" y="410" fill="#666670" fontSize="10" fontFamily="'JetBrains Mono', monospace">WIX 範本架構重構 ｜ FIGMA 視覺改作</text>
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
