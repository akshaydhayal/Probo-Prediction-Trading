const Landing = () => {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-gradient" x1="0" y1="0" x2="1" y2="1">
          {/* <stop offset="0%" style={{"stopColor:#1a1a2e"}}/> */}
          {/* <stop offset="100%" style={{"stop-color:#16213e"}}/> */}
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#bg-gradient)" />

      {/* <path d="M0,100 Q200,150 400,50 T800,150" fill="none" stroke="#4a90e2" strokeWidth="2" opacity="0.3" /> */}
      {/* <path d="M0,200 Q200,250 400,150 T800,250" fill="none" stroke="#4a90e2" strokeWidth="2" opacity="0.2" /> */}

      <g transform="translate(50, 80)">
        <text x="0" y="0" fill="#ffffff" fontSize="38" fontFamily="Arial" filter="url(#glow)">
          India's Leading Online Skill Gaming Platform
        </text>

        <text x="0" y="40" fill="#8a8a8a" fontSize="20" fontFamily="Arial">
          Trade when you like, on what you like.
        </text>

        <g transform="translate(0, 100)">
          <circle cx="50" cy="0" r="20" fill="#4a90e2" opacity="0.8" />
          <circle cx="50" cy="80" r="20" fill="#4a90e2" opacity="0.8" />
          <circle cx="50" cy="160" r="20" fill="#4a90e2" opacity="0.8" />

          <text x="100" y="5" fill="#ffffff" fontSize="18" fontFamily="Arial">
            Live Sports Predictions
          </text>
          <text x="100" y="85" fill="#ffffff" fontSize="18" fontFamily="Arial">
            Fastest news feed in the game
          </text>
          <text x="100" y="170" fill="#ffffff" fontSize="18" fontFamily="Arial">
            The power to exit trades, anytime
          </text>
        </g>

        {/* <rect x="0" y="350" width="200" height="50" rx="25" fill="#4a90e2"/> */}
        {/* <text x="40" y="382" fill="#ffffff" fontSize="20" fontFamily="Arial">Start Playing</text> */}
      </g>

      <g transform="translate(450, 150)">
        <circle cx="150" cy="120" r="120" fill="none" stroke="#4a90e2" strokeWidth="4" opacity="0.3" />
        <circle cx="150" cy="120" r="90" fill="none" stroke="#4a90e2" strokeWidth="4" opacity="0.2" />
        <circle cx="150" cy="120" r="60" fill="none" stroke="#4a90e2" strokeWidth="4" opacity="0.1" />

        <circle cx="150" cy="120" r="30" fill="#4a90e2" />
      </g>
      {/* <g transform="translate(450, 150)">
        <rect x="40" y="70" width="25" height="170" fill="#4A90E2" />
        <rect x="75" y="40" width="25" height="190" fill="#4A90E2" />
        <rect x="110" y="0" width="25" height="210" fill="#4A90E2" />
        <circle cx="40" cy="30" r="15" fill="none" stroke="#4A90E2" strokeWidth="2" />
        <path d="M35 30 L40 35 L45 25" stroke="#4A90E2" strokeWidth="2" fill="none" />
      </g> */}
    </svg>

    // <div className="flex flex-col justify-center w-11/12 items-center ml-12 ">
    //     <p className="font-[530] text-5xl text-center  text-slate-100 leading-tight tracking-wide">
    //       India's Leading Online Skill Gaming Platform
    //     </p>
    //     <p className="text-gray-400 text-lg text-center">Trade when you like, on what you like.</p>

    //   <img className="w-1/2 " src="https://probo.in/_next/image?url=https%3A%2F%2Fd39axbyagw7ipf.cloudfront.net%2Fimages%2Fhome%2Fheader%2Fheader-23012025.webp&w=1200&q=75" /> */}
    //    <div className="w-1/2">
    //     <p className="font-medium text-5xl text-slate-100 leading-snug">
    //       <span className="text-6xl">India's Leading</span> Online Skill Gaming Platform
    //     </p>
    //     <p className="text-gray-400 text-2xl">Trade when you like, on what you like.</p>
    //   </div>

    //    <p className="text-4xl tracking-wider font-semibold text-[#64b6ff]">SuperMemory</p>
    //   <p className="text-slate-400">Ready for your second brain?</p>
    //   <p className="text-slate-300 text-lg  mt-2">Dive into your thoughts, ideas, and inspirations. Your second brain is just one search away.</p>

    // </div>
  );
};

export default Landing;
