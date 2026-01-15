import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

import logo from "../../src/assets/logo.png"
const Footer = () => {
    const companyLinks = [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Privacy Policy", href: "#" },
    ];

    const serviceLinks = [
        { name: "Web Development", href: "#" },
        { name: "Cloud Solutions", href: "#" },
        { name: "AI Integration", href: "#" },
        { name: "UI/UX Design", href: "#" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter/X" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ];

    const contactInfo = [
        { icon: Mail, text: "hello@siat.dev" },
        { icon: Phone, text: "+947 662 21975" },
        { icon: MapPin, text: "393,Pitipana North,Halgahadeniya,Homagama,Sri Lanka" },
    ];

    return (
        <footer className="w-full bg-primary">
            {/* Top Gradient Divider */}
            <div className="gradient-divider w-full opacity-50"></div>

            <div className="pt-16 pb-8 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* 4-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                        {/* Column 1: Brand */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <img
                                    src={logo}
                                    alt="SIAT Logo"
                                    className="w-20 h-20 object-contain"
                                />

                            </div>
                            <p className="text-white/60 text-base leading-relaxed max-w-xs">
                                Crafting digital excellence through innovative software solutions. We build the future of tech.
                            </p>
                            <div className="flex gap-4 mt-2">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-lavender/20 hover:text-lavender transition-all"
                                        >
                                            <Icon size={20} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <h4 className="text-white text-lg font-bold mb-6">Company</h4>
                            <ul className="flex flex-col gap-4">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-lavender transition-colors footer-link"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Services */}
                        <div>
                            <h4 className="text-white text-lg font-bold mb-6">Services</h4>
                            <ul className="flex flex-col gap-4">
                                {serviceLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-lavender transition-colors footer-link"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Get In Touch */}
                        <div>
                            <h4 className="text-white text-lg font-bold mb-6">Get In Touch</h4>
                            <ul className="flex flex-col gap-4">
                                {contactInfo.map((contact, index) => {
                                    const Icon = contact.icon;
                                    return (
                                        <li key={index} className="flex items-start gap-3">
                                            <Icon className="text-lavender mt-1 flex-shrink-0" size={20} />
                                            <span className="text-white/60 text-sm">{contact.text}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Copyright Bar */}
                    <div className="pt-8 border-t border-white/10 text-center">
                        <p className="text-white/60 text-sm font-normal">
                            © 2026 SIAT. All rights reserved. Built for the modern web.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
