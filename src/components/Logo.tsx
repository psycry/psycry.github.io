import * as React from 'react';
import logoImage from '/digitial_nomad_logo_bright.png'; // Make sure the path to your logo is correct

const Logo: React.FC = () => (
    <div className="flex items-center">
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <img
                src={logoImage}
                alt="Digital Nomad Logo"
                className="w-full h-full"
            />
        </div>
        <span className="ml-3 text-lg md:text-xl font-bold text-slate-200 whitespace-nowrap">
            <span className="text-white">Digital</span>{' '}
            <span className="text-slate-400">Nomad</span>
        </span>
    </div>
);

export default Logo;