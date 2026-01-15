import React from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-20 px-6 relative min-h-screen">
                {/* Abstract Glow Backgrounds */}
                <div className="absolute top-40 left-1/4 w-96 h-96 bg-lavender/20 blur-[80px] rounded-full -z-10"></div>
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-lavender/10 blur-[80px] rounded-full -z-10"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Hero Content & Contact Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center gap-12">
                        <div className="space-y-6">
                            <h2 className="text-lavender font-bold tracking-[0.2em] uppercase text-sm">Contact Us</h2>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                                Let's Build Something <span className="text-lavender">Great</span> Together
                            </h1>
                            <p className="text-gray-400 text-lg max-w-md">
                                Have a visionary project in mind? Our team of elite engineers and designers is ready to turn your concept into a digital masterpiece.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lavender/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Email us</p>
                                    <p className="text-lg font-medium text-white">hello@siat.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lavender/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Call us</p>
                                    <p className="text-lg font-medium text-white">+94 (77) 000-TECH</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-lavender/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Visit us</p>
                                    <p className="text-lg font-medium text-white">Pitipana, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form Card */}
                    <div className="lg:col-span-7">
                        <div className="glass-card p-8 lg:p-12 rounded-xl relative overflow-hidden">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                                        <input
                                            className="w-full bg-white/5 border border-white/10 rounded-lg h-14 px-5 focus:ring-2 focus:ring-lavender focus:border-lavender transition-all text-white placeholder:text-gray-600"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                                        <input
                                            className="w-full bg-white/5 border border-white/10 rounded-lg h-14 px-5 focus:ring-2 focus:ring-lavender focus:border-lavender transition-all text-white placeholder:text-gray-600"
                                            placeholder="john@company.com"
                                            type="email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Service Interest</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/5 border border-white/10 rounded-lg h-14 px-5 focus:ring-2 focus:ring-lavender focus:border-lavender transition-all text-white appearance-none cursor-pointer">
                                            <option className="bg-dark" disabled value="" selected>Select a service</option>
                                            <option className="bg-dark" value="web">Web Application Development</option>
                                            <option className="bg-dark" value="ai">AI &amp; Machine Learning</option>
                                            <option className="bg-dark" value="ui">UI/UX Strategy &amp; Design</option>
                                            <option className="bg-dark" value="cloud">Cloud Infrastructure</option>
                                        </select>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-4 top-4 pointer-events-none text-gray-500 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Message</label>
                                    <textarea
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-5 focus:ring-2 focus:ring-lavender focus:border-lavender transition-all text-white placeholder:text-gray-600 resize-none"
                                        placeholder="Tell us about your project..."
                                        rows="4"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-lavender to-purple-500 hover:shadow-[0_0_20px_rgba(122,87,219,0.5)] text-white h-14 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group"
                                >
                                    <span>Send Message</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Trust Strip */}
                <div className="max-w-7xl mx-auto mt-24 py-10 border-y border-white/5 flex flex-wrap justify-center gap-10 md:gap-20 text-gray-500">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm font-medium uppercase tracking-widest">End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium uppercase tracking-widest">24-hour response time</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm font-medium uppercase tracking-widest">Secure &amp; confidential</span>
                    </div>
                </div>

                {/* Map Section */}
                <div className="max-w-7xl mx-auto mt-24">
                    <div className="w-full h-[400px] rounded-xl overflow-hidden glass-card relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3257.485176427043!2d80.02307388819392!3d6.83507413001018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2521644122405%3A0x459d406756b0a53c!2sSudu%20Araliya%20Food%20city%20-%20Pitipana!5e0!3m2!1sen!2slk!4v1768468071659!5m2!1sen!2slk%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: '' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Our Location"
                        ></iframe>
                        {/* Location Pin Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                            <div className="size-10 bg-lavender rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(122,87,219,0.8)]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing CTA Section */}
                <div className="max-w-5xl mx-auto mt-32 text-center py-20 bg-lavender/5 rounded-xl border border-lavender/20 relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 size-64 bg-lavender/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 size-64 bg-lavender/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 px-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Take the first step towards innovation. Join the dozens of companies that have scaled their vision with our premium tech solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-lavender hover:bg-lavender/90 text-white px-10 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
                                Get a Custom Quote
                            </button>
                            <button className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold transition-all border border-white/10">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
