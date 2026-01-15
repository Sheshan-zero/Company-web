import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import ReactIcon from '../assets/stackicon/react-svgrepo-com.svg';
import PostgresIcon from '../assets/stackicon/postgresql-svgrepo-com.svg';
import GraphQLIcon from '../assets/stackicon/graphql-svgrepo-com.svg';

const Services = () => {
    return (
        <>
            <Navbar />
            <main className="pt-20 min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                    {/* Mesh gradient background */}
                    <div className="absolute inset-0 bg-dark"></div>
                    <div className="absolute inset-0" style={{
                        background: 'radial-gradient(at 0% 0%, rgba(122, 87, 219, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(122, 87, 219, 0.1) 0px, transparent 50%)'
                    }}></div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-lavender/10 text-lavender text-xs font-bold uppercase tracking-widest mb-6 border border-lavender/20">Future-Proof Engineering</span>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8 text-white">
                            Architecting the <span className="text-lavender italic">Future</span> of Digital.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Premium engineering for world-class digital products. We build scalable, high-performance solutions with a focus on deep innovation and seamless user experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto bg-lavender text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 group transition-all hover:bg-lavender/90">
                                View Our Services
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 font-bold py-4 px-8 rounded-xl transition-all text-white">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
                </section>

                {/* Services Stack */}
                <section className="px-6 py-20 max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Capabilities</h2>
                        <div className="h-1 w-20 bg-lavender rounded-full"></div>
                    </div>

                    <div className="space-y-12 md:space-y-20">
                        {/* Service 01 - Product Design */}
                        <div className="glass-card p-8 md:p-12 rounded-3xl overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="flex flex-col gap-6">
                                    <div className="text-lavender text-6xl font-black opacity-30">01</div>
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-white">Product Design</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                            We combine user-centric research with cutting-edge visual design to create interfaces that don't just look beautiful, but drive meaningful engagement and conversion.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                UX Strategy &amp; Audits
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Visual Design Systems
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                High-Fidelity Prototyping
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="w-fit bg-lavender/20 text-lavender font-bold px-6 py-3 rounded-lg hover:bg-lavender hover:text-white transition-all">
                                        Explore Design
                                    </button>
                                </div>
                                <div className="rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-lavender/20 to-purple-900/30 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-lavender/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Service 02 - Full-stack Development */}
                        <div className="glass-card p-8 md:p-12 rounded-3xl overflow-hidden bg-zinc-900/50">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-blue-900/30 to-lavender/20 flex items-center justify-center order-last md:order-first">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-lavender/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="text-lavender text-6xl font-black opacity-30">02</div>
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-white">Full-stack Development</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                            Scalable, secure, and lightning-fast. Our engineering team builds robust backend architectures and reactive frontends that grow alongside your business.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Microservices Architecture
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Custom API Integrations
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                React, Node.js, and Golang
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="w-fit bg-lavender/20 text-lavender font-bold px-6 py-3 rounded-lg hover:bg-lavender hover:text-white transition-all">
                                        Engineering Stack
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Service 03 - AI & Machine Learning */}
                        <div className="glass-card p-8 md:p-12 rounded-3xl overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="flex flex-col gap-6">
                                    <div className="text-lavender text-6xl font-black opacity-30">03</div>
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-white">AI &amp; Machine Learning</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                            Leverage the power of large language models and predictive analytics. We integrate intelligent features that automate workflows and personalize experiences.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                LLM Fine-tuning
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Data Visualization
                                            </li>
                                            <li className="flex items-center gap-3 text-sm font-medium text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Automated Business Intelligence
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="w-fit bg-lavender/20 text-lavender font-bold px-6 py-3 rounded-lg hover:bg-lavender hover:text-white transition-all">
                                        View AI Solutions
                                    </button>
                                </div>
                                <div className="rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-purple-900/30 to-lavender/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-lavender/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Stack Section */}
                <section className="bg-[#111] py-24 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white">The Stack</h2>
                        <p className="text-gray-400">Our battle-tested technologies for high-performance builds.</p>
                    </div>
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {/* React */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-lavender/50 transition-all group">
                            <img src={ReactIcon} alt="React" className="w-12 h-12 group-hover:scale-110 transition-transform" />
                            <p className="font-bold text-white">React</p>
                        </div>

                        {/* Node.js */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-lavender/50 transition-all group">
                            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#339933] group-hover:scale-110 transition-transform" fill="currentColor">
                                <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.066-.037.152-.023.22.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.283.283 0 00-.137-.242l-8.791-5.072a.278.278 0 00-.271 0L3.075 6.68a.284.284 0 00-.139.241v10.15a.27.27 0 00.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551l-2.306-1.326A1.85 1.85 0 011.36 17.068V6.921c0-.663.354-1.283.922-1.613L11.076.232a1.927 1.927 0 011.846 0l8.794 5.076c.568.33.922.95.922 1.613v10.15c0 .662-.354 1.282-.922 1.611l-8.794 5.078a1.878 1.878 0 01-.924.24zm2.722-6.993c-3.942 0-4.766-1.812-4.766-3.332 0-.142.114-.253.256-.253h1.138c.126 0 .232.091.253.215.172 1.163.686 1.75 3.02 1.75 1.858 0 2.65-.42 2.65-1.404 0-.567-.224-.988-3.11-1.271-2.412-.238-3.904-.771-3.904-2.7 0-1.778 1.5-2.837 4.013-2.837 2.823 0 4.222.979 4.399 3.083a.263.263 0 01-.066.193.261.261 0 01-.186.082h-1.146a.252.252 0 01-.245-.193c-.272-1.208-.93-1.596-2.756-1.596-2.03 0-2.266.707-2.266 1.237 0 .642.279.829 3.012 1.192 2.71.36 4.001.869 4.001 2.764-.003 1.921-1.601 3.02-4.393 3.02z" />
                            </svg>
                            <p className="font-bold text-white">Node.js</p>
                        </div>

                        {/* AWS */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-lavender/50 transition-all group">
                            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#FF9900] group-hover:scale-110 transition-transform" fill="currentColor">
                                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.392-.382-.591-.893-.591-1.534 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104a6.348 6.348 0 00-.862.272 2.287 2.287 0 01-.28.104.488.488 0 01-.127.024c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.61 4.61 0 011.014-.336 5.06 5.06 0 011.22-.152c.936 0 1.62.208 2.052.632.425.415.64 1.05.64 1.901v2.506zm-3.243 1.213c.263 0 .535-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.025 6.025 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.407.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.152-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.335c0-.128.064-.2.191-.2h.783c.152 0 .256.025.303.08.064.048.112.152.16.312l1.342 5.284 1.245-5.284c.04-.168.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.152.151.312l1.261 5.348 1.381-5.348c.048-.168.104-.264.16-.312a.52.52 0 01.303-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.215l-1.918 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.025-.319-.08-.063-.056-.12-.152-.151-.32l-1.238-5.148-1.23 5.14c-.04.168-.088.264-.152.32-.064.055-.176.08-.32.08h-.687zm10.24.24c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.216-.152-.24-.231a.603.603 0 01-.04-.2V11.1c0-.168.064-.248.183-.248a.455.455 0 01.144.024 2.997 2.997 0 00.279.095c.336.103.694.2 1.069.254a5.6 5.6 0 001.102.095c.543 0 .958-.095 1.238-.287.28-.191.423-.462.423-.814 0-.24-.079-.439-.231-.599-.152-.16-.44-.311-.862-.463l-1.239-.375c-.622-.191-1.085-.479-1.373-.86a2.026 2.026 0 01-.431-1.245c0-.359.08-.679.231-.959.152-.279.351-.511.607-.694.256-.183.551-.319.894-.407.344-.088.711-.136 1.11-.136.2 0 .407.008.623.032.216.024.423.056.622.096.192.032.375.072.55.128.176.048.311.095.399.144a.87.87 0 01.256.2.416.416 0 01.072.24v.343c0 .168-.064.256-.183.256a.828.828 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.495 0-.886.08-1.166.24-.28.159-.423.398-.423.718 0 .24.088.447.263.615.176.168.503.335.974.495l1.213.375c.615.191 1.061.455 1.333.783.272.328.4.703.4 1.117 0 .367-.08.703-.232.999a2.233 2.233 0 01-.63.727c-.263.2-.582.343-.942.431a4.668 4.668 0 01-1.19.152zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.271-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.122-.607 9.073-1.852.44-.2.814.287.371.607zM22.792 14.961c-.336-.431-2.223-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.747 4.254-.399.287.36-.08 2.826-1.485 4.007-.216.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
                            </svg>
                            <p className="font-bold text-white">AWS</p>
                        </div>

                        {/* PostgreSQL */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-lavender/50 transition-all group">
                            <img src={PostgresIcon} alt="PostgreSQL" className="w-12 h-12 group-hover:scale-110 transition-transform" />
                            <p className="font-bold text-white">Postgres</p>
                        </div>

                        {/* Docker */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-lavender/50 transition-all group">
                            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#2496ED] group-hover:scale-110 transition-transform" fill="currentColor">
                                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
                            </svg>
                            <p className="font-bold text-white">Docker</p>
                        </div>

                        {/* GraphQL */}
                        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-lavender/50 transition-all group">
                            <img src={GraphQLIcon} alt="GraphQL" className="w-12 h-12 group-hover:scale-110 transition-transform" />
                            <p className="font-bold text-white">GraphQL</p>
                        </div>
                    </div>
                </section>

                {/* How We Deliver Section */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-4xl font-bold mb-4 text-white">How We Deliver</h2>
                        <p className="text-gray-400">A structured process for predictable, high-quality outcomes.</p>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="md:hidden space-y-8">
                        {[
                            { num: '01', title: 'Discovery', desc: 'Deep dive into your business goals and technical requirements.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                            { num: '02', title: 'Architecture & Engineering', desc: 'Agile development cycles with continuous integration.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
                            { num: '03', title: 'Quality Assurance', desc: 'Automated testing and rigorous manual audits.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                            { num: '04', title: 'Launch & Scaling', desc: 'Continuous monitoring and optimization post-launch.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
                        ].map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="size-12 bg-lavender rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(122,87,219,0.6)] flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                                        </svg>
                                    </div>
                                    {index < 3 && <div className="w-0.5 flex-1 bg-gradient-to-b from-lavender to-lavender/30 mt-2"></div>}
                                </div>
                                <div className="pb-8">
                                    <h4 className="text-lg font-bold mb-2 text-white">{step.title}</h4>
                                    <p className="text-gray-400 text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Timeline */}
                    <div className="hidden md:block relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5"></div>
                        <div className="space-y-12 relative">
                            {/* Step 1 */}
                            <div className="flex items-center justify-between gap-8">
                                <div className="w-5/12 text-right">
                                    <h4 className="text-2xl font-bold mb-2 text-white">Discovery</h4>
                                    <p className="text-gray-400">Deep dive into your business goals, user needs, and technical requirements.</p>
                                </div>
                                <div className="size-12 bg-lavender rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(122,87,219,0.6)] z-10 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="w-5/12"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-center justify-between gap-8">
                                <div className="w-5/12"></div>
                                <div className="size-12 bg-lavender rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(122,87,219,0.6)] z-10 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="w-5/12">
                                    <h4 className="text-2xl font-bold mb-2 text-white">Architecture &amp; Engineering</h4>
                                    <p className="text-gray-400">Agile development cycles with continuous integration and real-time feedback loops.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-center justify-between gap-8">
                                <div className="w-5/12 text-right">
                                    <h4 className="text-2xl font-bold mb-2 text-white">Quality Assurance</h4>
                                    <p className="text-gray-400">Automated testing and rigorous manual audits to ensure a bug-free launch.</p>
                                </div>
                                <div className="size-12 bg-lavender rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(122,87,219,0.6)] z-10 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="w-5/12"></div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex items-center justify-between gap-8">
                                <div className="w-5/12"></div>
                                <div className="size-12 bg-lavender rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(122,87,219,0.6)] z-10 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div className="w-5/12">
                                    <h4 className="text-2xl font-bold mb-2 text-white">Launch &amp; Scaling</h4>
                                    <p className="text-gray-400">Continuous monitoring and optimization to support your growth post-launch.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto bg-gradient-to-br from-lavender to-indigo-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute -top-20 -right-20 size-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 size-96 bg-black/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">Ready to scale your <br />digital infrastructure?</h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                                Let's discuss how we can help you build the future of your company. Our experts are ready to audit your current stack.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="w-full sm:w-auto bg-white text-lavender font-bold py-5 px-10 rounded-2xl hover:scale-105 transition-all shadow-xl">
                                    Get a Free Consultation
                                </button>
                                <Link to="/contact" className="w-full sm:w-auto bg-white/10 border border-white/20 text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm text-center">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Services;
