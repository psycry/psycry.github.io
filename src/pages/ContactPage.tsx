import * as React from 'react';
import FAQItem from '../components/FAQItem';

const ContactPage: React.FC = () => (
    <div className="animate-fade-in bg-slate-900 text-white">
        <section className="py-12 bg-slate-800/50">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Connect</h1>
                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">Ready to start a project? Drop us a line.</p>
            </div>
        </section>
        <section className="py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12">
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                    <p className="text-slate-400 mb-6">Use the form or transmit directly to our inbox.</p>
                    <div className="space-y-4 text-slate-300">
                        <p className="flex items-center"><span className="text-teal-400 mr-3 font-bold">Email:</span> digitlnomadnexus@gmail.com</p>
                        <p className="flex items-center"><span className="text-teal-400 mr-3 font-bold">Timezone:</span> Eastern Standard Time (EST)</p>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-xl font-bold text-white mb-4">Common Transmissions</h4>
                        <div className="max-w-xl">
                            <FAQItem question="What kind of clients do you work with?">
                                <p>We partner with aspiring and current digital nomads, solopreneurs, freelancers, and small, remote-first companies who value freedom and intentionality.</p>
                            </FAQItem>
                            <FAQItem question="How do you handle projects across timezones?">
                                <p>We live and breathe asynchronous communication. We use modern tools to keep projects moving 24/7, with scheduled calls only when absolutely necessary. This maximizes deep work and respects everyone's schedule, wherever they are in the world.</p>
                            </FAQItem>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3 bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                    <h3 className="text-2xl font-bold text-white mb-6">Secure Transmission Form</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-slate-400 font-semibold mb-2">Callsign / Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-slate-400 font-semibold mb-2">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-slate-400 font-semibold mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-slate-400 font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-teal-500 transition-all shadow-lg">Transmit Message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
);

export default ContactPage;

