import * as React from 'react';
import { useEffect } from 'react';

const ThankYouPage: React.FC = () => {
    // Redirect to home after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.hash = 'home';
            window.location.reload();
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
            <div className="max-w-2xl mx-auto text-center bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                <div className="text-6xl mb-6">✓</div>
                <h1 className="text-4xl font-bold mb-4">Message Received</h1>
                <p className="text-xl text-slate-300 mb-8">
                    Thank you for reaching out! We'll get back to you as soon as possible.
                </p>
                <p className="text-slate-400">
                    You'll be redirected to the homepage in a few seconds...
                </p>
                <div className="mt-8">
                    <a 
                        href="/#home" 
                        className="inline-block bg-gradient-to-r from-purple-600 to-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:from-purple-500 hover:to-teal-500 transition-all shadow-lg"
                    >
                        Return Home Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
