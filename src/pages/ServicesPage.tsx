import * as React from 'react';

const imageUrls = {
    appCreation: "https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=1920&auto=format&fit=crop",
    consulting: "https://images.unsplash.com/photo-1604398192348-1352fd87b3a1?q=80&w=1920&auto=format&fit=crop",
};

const ServicesPage: React.FC = () => (
    <div className="animate-fade-in bg-slate-900 text-white">
        <section className="py-12 bg-slate-800/50">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Services</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">Your journey to digital freedom requires the right tools and a solid strategy. We provide both.</p>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">Custom Applications</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">Your digital presence is your home base. We build fast, secure, and beautiful platforms that automate your work so you can focus on living.</p>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>Personal Branding & Portfolio Sites</li>
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>Automated E-commerce & Service Platforms</li>
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>Custom Productivity & Workflow Tools</li>
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>API Integrations to streamline your business</li>
                        </ul>
                    </div>
                    {/*<div className="order-2 md:order-1">*/}
                    {/*    <img src={imageUrls.consulting} alt="World map with connections" className="rounded-lg shadow-2xl shadow-teal-900/40 opacity-80"/>*/}
                    {/*</div>*/}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500">Consulting</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">An idea is not enough. We provide the roadmap to turn your idea into a reality.</p>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Tech Stack & Tooling Advisory</li>
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Finding & Securing Remote-First Work</li>
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Online Business & Freelance Structuring</li>
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Productivity Systems for Asynchronous Work</li>
                        </ul>
                    </div>
                    {/*<div>*/}
                    {/*    <img src={imageUrls.appCreation} alt="Abstract digital art" className="rounded-lg shadow-2xl shadow-purple-900/40 opacity-80"/>*/}
                    {/*</div>*/}
                </div>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/*<div className="order-2 md:order-1">*/}
                    {/*    <img src={imageUrls.consulting} alt="World map with connections" className="rounded-lg shadow-2xl shadow-teal-900/40 opacity-80"/>*/}
                    {/*</div>*/}
                    {/*<div className="order-1 md:order-2">*/}
                    {/*    <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500">Consulting</h2>*/}
                    {/*    <p className="text-slate-300 leading-relaxed mb-6">An idea is not enough. We provide the roadmap to turn your idea into a reality.</p>*/}
                    {/*    <ul className="space-y-3 text-slate-300">*/}
                    {/*        <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Tech Stack & Tooling Advisory</li>*/}
                    {/*        <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Finding & Securing Remote-First Work</li>*/}
                    {/*        <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Online Business & Freelance Structuring</li>*/}
                    {/*        <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Productivity Systems for Asynchronous Work</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    </div>
);

export default ServicesPage;