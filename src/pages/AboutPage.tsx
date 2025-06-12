import * as React from 'react';

const imageUrls = {
    story: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1920&auto=format&fit=crop",
    teamMember1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    teamMember2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    teamMember3: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=256&auto=format&fit=crop",
};

const AboutPage: React.FC = () => (
    <div className="animate-fade-in bg-slate-900 text-white">
        <section className="py-12 bg-slate-800/50">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Our Ethos</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">We're not just a company; we're a collective of creators living the life we advocate. Freedom, mastery, and adventure are coded into everything we do.</p>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">Founded in Motion</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Digital Nomad LLC wasn't conceived in a boardroom. It was founded from a shared passion for technology and a life unbound by convention.
                        We are run by nomads, for nomads. We’ve coded from bustling city cafes and lived the challenges building the solutions that make this lifestyle sustainable and rewarding.
                        Our passion is code and bringing ideas to reality.
                    </p>
                </div>
                {/*<div>*/}
                {/*    <img src={imageUrls.story} alt="A lone traveler in a vast landscape" className="rounded-lg shadow-xl opacity-80"/>*/}
                {/*</div>*/}
            </div>
        </section>

        {/*<section className="py-20 bg-slate-800/50">*/}
        {/*    <div className="container mx-auto px-6 text-center">*/}
        {/*        <h2 className="text-3xl font-bold text-white mb-12">The Core Collective</h2>*/}
        {/*        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">*/}
        {/*            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 text-center">*/}
        {/*                <img src={imageUrls.teamMember1} alt="Alex 'Vector' Vance" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500"/>*/}
        {/*                <h4 className="text-xl font-bold text-white">Alex 'Vector' Vance</h4>*/}
        {/*                <p className="text-purple-400 font-semibold">Founder & Lead Architect</p>*/}
        {/*            </div>*/}
        {/*            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 text-center">*/}
        {/*                <img src={imageUrls.teamMember2} alt="Maya 'Firefly' Chen" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-500"/>*/}
        {/*                <h4 className="text-xl font-bold text-white">Maya 'Firefly' Chen</h4>*/}
        {/*                <p className="text-teal-400 font-semibold">Growth & Strategy Lead</p>*/}
        {/*            </div>*/}
        {/*            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 text-center">*/}
        {/*                <img src={imageUrls.teamMember3} alt="Sam 'Node' Rodriguez" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-500"/>*/}
        {/*                <h4 className="text-xl font-bold text-white">Sam 'Node' Rodriguez</h4>*/}
        {/*                <p className="text-slate-400 font-semibold">Client Success Engineer</p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
    </div>
);

export default AboutPage;