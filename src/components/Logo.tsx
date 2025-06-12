import * as React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center">
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <svg 
                className="w-full h-full" 
                viewBox="0 0 45 45" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="logo-gradient-1" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="0%" stopColor="#BE63F9" />
                        <stop offset="100%" stopColor="#4359D4" />
                    </linearGradient>
                    <linearGradient id="logo-gradient-2" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="0%" stopColor="#14B8A6" />
                        <stop offset="100%" stopColor="#2E6A8A" />
                    </linearGradient>
                </defs>
                <g transform="translate(2, 2) scale(0.9)">
                    <path d="M26.3,3.5h-5.5v33h5.5c8,0,13.2-5.3,13.2-16.5C39.5,8.8,34.3,3.5,26.3,3.5z M26.5,31h-0.2V9h0.2c5,0,7.7,4.3,7.7,11C34.2,26.7,31.5,31,26.5,31z" fill="url(#logo-gradient-1)" />
                    <path d="M15,20m-5,0a5,5 0 1,0 10,0a5,5 0 1,0 -10,0" fill="url(#logo-gradient-1)"/>
                    <path d="M0,3.5h5.5v13h-5.5z M0,23.5h5.5v13h-5.5z" fill="url(#logo-gradient-2)" />
                </g>
            </svg>
        </div>
        <span className="ml-3 text-lg md:text-xl font-bold text-slate-200 whitespace-nowrap">
            <span className="text-white">Digital</span>{' '}
            <span className="text-slate-400">Nomad</span>
        </span>
    </div>
);

export default Logo;