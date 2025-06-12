import * as React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => (
    <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-6 md:mb-0">
                    <Logo />
                    <p className="text-slate-500 mt-2">Engineer Your Freedom. Live Unbound.</p>
                </div>
                <div className="flex space-x-6 text-slate-400">
                    <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
                    <a href="#products" className="hover:text-teal-400 transition-colors">Products</a>
                    <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
                    <a href="#contact" className="hover:text-teal-400 transition-colors">Connect</a>
                    <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
                </div>
            </div>
            <div className="mt-10 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Digital Nomad LLC. All Rights Reserved.
            </div>
        </div>
    </footer>
);

export default Footer;