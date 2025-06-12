import * as React from 'react';

type CTAButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
};

const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '', href = "#contact" }) => (
    <a
        href={href}
        onClick={(e) => {
            e.preventDefault();
            window.location.hash = href.replace('#', '');
        }}
        className={`inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 ${className}`}
    >
        {children}
    </a>
);

export default CTAButton;