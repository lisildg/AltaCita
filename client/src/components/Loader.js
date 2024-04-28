import React from "react";

const Loader = () => {
  return (
    <div className="loader fixed z-50 top-0 left-0 w-full h-full bg-fondo flex justify-center items-center">
      <svg
        className="heart-loader text-info"
        viewBox="0 0 50 50"
        width="180"
        height="180"
        title="heart"
        style={{ animation: 'neon 1.5s ease-in-out infinite alternate' }}
      >
        <defs>
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feComponentTransfer in="blur" result="glow">
          <feFuncA type="linear" slope="4" />
        </feComponentTransfer>
        <feBlend in="SourceGraphic" in2="glow" mode="screen" />
      </filter>
    </defs>
        <path
          className="stroke-blue-500"
          d="M17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"
          fill="none"
          stroke="#3498DB"
          strokeWidth="2"
          filter="url(#neon-glow)" // Aplicando el filtro SVG
        >
          <animate
            attributeName="stroke-dasharray"
            dur="6s"
            begin="0s"
            end="0.5s"
            repeatCount="indefinite" 
            values="0 1000;1000 0"
          />
        </path>
      </svg>
    </div>
  );
};

export default Loader;
