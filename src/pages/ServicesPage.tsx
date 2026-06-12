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
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">Accelerate your business with custom software development and expert technical consulting.</p>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">Custom Applications</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">We design and build modern, performant, and secure web and mobile applications that optimize workflows and engage users.</p>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>Web & Mobile App Development</li>
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>Automated Business Platforms & E-Commerce</li>
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>Custom Enterprise Tools & Workflow Automation</li>
                            <li className="flex items-center"><span className="text-purple-400 mr-3 text-xl">&rarr;</span>Seamless Third-Party & API Integrations</li>
                        </ul>
                    </div>
                    {/*<div className="order-2 md:order-1">*/}
                    {/*    <img src={imageUrls.consulting} alt="World map with connections" className="rounded-lg shadow-2xl shadow-teal-900/40 opacity-80"/>*/}
                    {/*</div>*/}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500">Consulting</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">We help you define your technical roadmap, choose the right tech stack, and optimize your engineering processes.</p>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Software Architecture & Tech Stack Advisory</li>
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Cloud Strategy & Performance Optimization</li>
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Business Process & Workflow Consulting</li>
                            <li className="flex items-center"><span className="text-teal-400 mr-3 text-xl">&rarr;</span>Legacy System Modernization Roadmap</li>
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