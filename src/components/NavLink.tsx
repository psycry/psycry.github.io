import * as React from 'react';

type NavLinkProps = {
    page: string;
    currentPage: string;
    setCurrentPage: (page: string) => void;
    children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ page, currentPage, setCurrentPage, children }) => {
    const isActive = currentPage === page;
    return (
        <a
            href={`#${page}`}
            className={`font-semibold transition-colors duration-300 relative ${isActive ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'}`}
            onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
                window.location.hash = page;
            }}
        >
            {children}
            {isActive && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full"></span>}
        </a>
    );
};

export default NavLink;