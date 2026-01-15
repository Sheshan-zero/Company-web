import React from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-24 md:py-40">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url(/Company-web/about-hero.png)' }}
                    ></div>
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50"></div>
                    {/* Glow effect */}
                    <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-lavender/20 blur-[120px] rounded-full -z-10"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-lavender/10 border border-lavender/20 text-lavender text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">Our Story</span>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Architecting the <br />Digital Renaissance</h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
                                We combine precision engineering with artistic vision to deliver digital solutions that redefine industry standards.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="glass-card p-4 rounded-xl flex items-center gap-3 backdrop-blur-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-sm font-medium text-white">Enterprise Certified</span>
                                </div>
                                <div className="glass-card p-4 rounded-xl flex items-center gap-3 backdrop-blur-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-white">Global Operations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass-card p-10 rounded-2xl hover:border-lavender/50 hover:shadow-[0_0_20px_rgba(122,87,219,0.2)] transition-all">
                                <div className="size-14 bg-lavender/20 rounded-xl flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                                <p className="text-gray-400 leading-relaxed italic">
                                    "To empower forward-thinking enterprises by bridging the gap between imaginative concepts and technical reality through radical innovation."
                                </p>
                            </div>
                            <div className="glass-card p-10 rounded-2xl hover:border-lavender/50 hover:shadow-[0_0_20px_rgba(122,87,219,0.2)] transition-all">
                                <div className="size-14 bg-lavender/20 rounded-xl flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                                <p className="text-gray-400 leading-relaxed italic">
                                    "To become the world's most trusted catalyst for digital transformation, setting the standard for quality, security, and user-centric design."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Strengths Grid */}
                <section className="py-20 bg-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Strengths</h2>
                            <p className="text-gray-400">The pillars of our technical excellence.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="glass-card p-8 rounded-xl border-l-4 border-l-lavender group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <h4 className="text-xl font-bold mb-2 text-white">AI Integration</h4>
                                <p className="text-sm text-gray-400">Embedding cognitive intelligence into every layer of your business architecture.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="glass-card p-8 rounded-xl border-l-4 border-l-lavender group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <h4 className="text-xl font-bold mb-2 text-white">Cloud Security</h4>
                                <p className="text-sm text-gray-400">Zero-trust frameworks designed to protect your most sensitive digital assets.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="glass-card p-8 rounded-xl border-l-4 border-l-lavender group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                                <h4 className="text-xl font-bold mb-2 text-white">Scalable Systems</h4>
                                <p className="text-sm text-gray-400">Future-proof infrastructure built to handle hyper-growth and global traffic.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="relative py-24 bg-lavender overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
                            <div>
                                <p className="text-5xl font-black mb-2">500+</p>
                                <p className="text-sm font-medium uppercase tracking-widest opacity-80">Projects Delivered</p>
                            </div>
                            <div>
                                <p className="text-5xl font-black mb-2">99%</p>
                                <p className="text-sm font-medium uppercase tracking-widest opacity-80">Client Success</p>
                            </div>
                            <div>
                                <p className="text-5xl font-black mb-2">10+</p>
                                <p className="text-sm font-medium uppercase tracking-widest opacity-80">Years Expertise</p>
                            </div>
                            <div>
                                <p className="text-5xl font-black mb-2">45</p>
                                <p className="text-sm font-medium uppercase tracking-widest opacity-80">Global Awards</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Process (Timeline) */}
                <section className="py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Methodology</h2>
                            <p className="text-gray-400">A systematic approach to achieving greatness.</p>
                        </div>

                        {/* Mobile Timeline (visible on small screens) */}
                        <div className="md:hidden space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="size-12 rounded-full bg-dark border-4 border-lavender shadow-[0_0_20px_rgba(122,87,219,0.4)] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <div className="w-0.5 flex-1 bg-gradient-to-b from-lavender to-lavender/30 mt-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h4 className="text-lg font-bold mb-2 text-white">01. Discovery</h4>
                                    <p className="text-gray-400 text-sm">Deep diving into your business ecosystem to identify core opportunities and challenges.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="size-12 rounded-full bg-dark border-4 border-lavender shadow-[0_0_20px_rgba(122,87,219,0.4)] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </div>
                                    <div className="w-0.5 flex-1 bg-gradient-to-b from-lavender to-lavender/30 mt-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h4 className="text-lg font-bold mb-2 text-white">02. Design &amp; Prototype</h4>
                                    <p className="text-gray-400 text-sm">Translating insights into intuitive user experiences and technical blueprints.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="size-12 rounded-full bg-dark border-4 border-lavender shadow-[0_0_20px_rgba(122,87,219,0.4)] flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-white">03. Rapid Development</h4>
                                    <p className="text-gray-400 text-sm">High-octane engineering using modern stacks to build secure, scalable code.</p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Timeline (hidden on small screens) */}
                        <div className="hidden md:block relative">
                            {/* Vertical Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lavender/50 via-lavender to-lavender/50 -translate-x-1/2"></div>

                            {/* Steps */}
                            <div className="space-y-24 relative">
                                {/* Step 1 */}
                                <div className="flex flex-row items-center">
                                    <div className="flex-1 text-right pr-16">
                                        <h4 className="text-xl font-bold mb-2 text-white">01. Discovery</h4>
                                        <p className="text-gray-400">Deep diving into your business ecosystem to identify core opportunities and challenges.</p>
                                    </div>
                                    <div className="size-16 rounded-full bg-dark border-4 border-lavender shadow-[0_0_20px_rgba(122,87,219,0.4)] flex items-center justify-center z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1"></div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex flex-row items-center">
                                    <div className="flex-1"></div>
                                    <div className="size-16 rounded-full bg-dark border-4 border-lavender shadow-[0_0_20px_rgba(122,87,219,0.4)] flex items-center justify-center z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 pl-16">
                                        <h4 className="text-xl font-bold mb-2 text-white">02. Design &amp; Prototype</h4>
                                        <p className="text-gray-400">Translating insights into intuitive user experiences and technical blueprints.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-row items-center">
                                    <div className="flex-1 text-right pr-16">
                                        <h4 className="text-xl font-bold mb-2 text-white">03. Rapid Development</h4>
                                        <p className="text-gray-400">High-octane engineering using modern stacks to build secure, scalable code.</p>
                                    </div>
                                    <div className="size-16 rounded-full bg-dark border-4 border-lavender shadow-[0_0_20px_rgba(122,87,219,0.4)] flex items-center justify-center z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div className="flex-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#1c1829] to-dark border border-white/5 p-12 md:p-24 rounded-[2.5rem] text-center">
                            <div className="absolute -top-24 -right-24 size-96 bg-lavender/10 blur-[100px] rounded-full"></div>
                            <div className="absolute -bottom-24 -left-24 size-96 bg-lavender/10 blur-[100px] rounded-full"></div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">Ready to transform <br />your vision?</h2>
                            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12">Join the league of industry leaders who have already redefined their digital footprint with us.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="w-full sm:w-auto px-10 py-4 bg-lavender hover:bg-lavender/90 text-white rounded-xl font-bold transition-all shadow-lg shadow-lavender/20">
                                    Contact Us
                                </button>
                                <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all">
                                    View Services
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutUs;
