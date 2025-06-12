import * as React from 'react';
import { useState } from 'react';

type FAQItemProps = {
    question: string;
    children: React.ReactNode;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-700 py-4">
            <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-slate-200">{question}</h3>
                <span className={`transform transition-transform duration-300 text-teal-400 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            {isOpen && <div className="mt-4 text-slate-400 animate-fade-in-down">{children}</div>}
        </div>
    );
};

export default FAQItem;