export function AnimatedOrbit() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-70">
      <svg 
        viewBox="0 0 1000 1000" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full min-w-[800px] min-h-[800px] object-cover"
      >
        <defs>
          <filter id="glow-purple">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-pink">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glow-blue">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* X-Axis Dominant Orbit */}
        <g>
          <path id="orbitX" d="M 100,500 A 400,150 0 1,0 900,500 A 400,150 0 1,0 100,500" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 8" />
          <circle r="6" fill="#8b5cf6" filter="url(#glow-purple)">
            <animateMotion dur="25s" repeatCount="indefinite">
              <mpath href="#orbitX" />
            </animateMotion>
          </circle>
          {/* Second star on same orbit but delayed */}
          <circle r="3" fill="#ffffff" filter="url(#glow-purple)">
            <animateMotion dur="25s" begin="-12.5s" repeatCount="indefinite">
              <mpath href="#orbitX" />
            </animateMotion>
          </circle>
        </g>

        {/* Y-Axis Dominant Orbit */}
        <g>
          <path id="orbitY" d="M 500,100 A 150,400 0 1,0 500,900 A 150,400 0 1,0 500,100" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 8" />
          <circle r="5" fill="#d946ef" filter="url(#glow-pink)">
            <animateMotion dur="20s" repeatCount="indefinite">
              <mpath href="#orbitY" />
            </animateMotion>
          </circle>
        </g>

        {/* Diagonal Orbit 1 */}
        <g transform="rotate(45 500 500)">
          <path id="orbitD1" d="M 200,500 A 300,100 0 1,0 800,500 A 300,100 0 1,0 200,500" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <circle r="4" fill="#38bdf8" filter="url(#glow-blue)">
            <animateMotion dur="18s" repeatCount="indefinite">
              <mpath href="#orbitD1" />
            </animateMotion>
          </circle>
        </g>
        
        {/* Diagonal Orbit 2 */}
        <g transform="rotate(-45 500 500)">
          <path id="orbitD2" d="M 150,500 A 350,120 0 1,0 850,500 A 350,120 0 1,0 150,500" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle r="3" fill="#ffffff" filter="url(#glow-blue)">
            <animateMotion dur="28s" repeatCount="indefinite">
              <mpath href="#orbitD2" />
            </animateMotion>
          </circle>
        </g>

      </svg>
    </div>
  );
}
