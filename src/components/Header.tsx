import * as React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';

type HeaderProps = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => (
    <header className="bg-slate-900/70 backdrop-blur-lg border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#home" onClick={() => setCurrentPage('home')} className="cursor-pointer">
                <Logo />
            </a>
            <nav className="hidden md:flex items-center space-x-8">
                <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
                <NavLink page="products" currentPage={currentPage} setCurrentPage={setCurrentPage}>Products</NavLink>
                <NavLink page="services" currentPage={currentPage} setCurrentPage={setCurrentPage}>Services</NavLink>
                <NavLink page="contact" currentPage={currentPage} setCurrentPage={setCurrentPage}>Contact</NavLink>
                <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About</NavLink>
            </nav>
        </div>
    </header>
);

export default Header;