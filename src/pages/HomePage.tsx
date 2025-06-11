import React from 'react';
import CTAButton from '../components/CTAButton';

const HomePage: React.FC = () => (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-24 pb-20 text-white overflow-hidden">
            <div className="absolute inset-0 bg-slate-900"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')]"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
                    Engineer Your Freedom.
                </h1>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-200 mb-6">Live Unbound.</h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                    We build the digital tools and strategies that empower you to work from anywhere on Earth. Your journey to location independence starts here.
                </p>
                <CTAButton href="#services">Begin Your Journey</CTAButton>
            </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-slate-100 mb-12">Your Digital Nomad Launchpad</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-purple-500 transition-all transform hover:-translate-y-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Nomad-Ready Applications</h3>
                        <p className="text-slate-400 mb-6">From personal portfolios to automated business platforms, we build the custom technology that sets you free.</p>
                        <a href="#services" className="font-semibold text-teal-400 hover:text-teal-300">Explore Tech Solutions &rarr;</a>
                    </div>
                    <div className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-teal-500 transition-all transform hover:-translate-y-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Independence Consulting</h3>
                        <p className="text-slate-400 mb-6">Step-by-step guidance on the tech, strategy, and mindset needed to launch your new life as a Digital Nomad.</p>
                        <a href="#services" className="font-semibold text-purple-400 hover:text-purple-300">View Consulting Paths &rarr;</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-slate-900">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Break Free From the 9-to-5?</h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">The world is waiting. Let's build your digital toolkit for a life without borders.</p>
                <CTAButton>Schedule a Strategy Call</CTAButton>
            </div>
        </section>
    </div>
);

export default HomePage;