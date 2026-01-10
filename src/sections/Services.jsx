import React from 'react';
import PixelCard from '../components/PixelCard';
import GradientText from '../components/ui/GradientText';

const Services = () => {
    const services = [
        {
            icon: 'code-slash',
            title: 'Web Development',
            description: 'Full-stack web applications built with modern frameworks for maximum performance and security.',
        },
        {
            icon: 'color-palette',
            title: 'UI/UX Design',
            description: 'User-centric interface design and behavioral research to create intuitive digital experiences.',
        },
        {
            icon: 'cloud-done',
            title: 'Cloud & DevOps',
            description: 'Scalable cloud architecture and automated CI/CD pipelines for seamless deployment cycles.',
        },
        {
            icon: 'shield-checkmark',
            title: 'Cybersecurity',
            description: 'Advanced data protection, vulnerability assessments, and enterprise-grade security auditing.',
        },
        {
            icon: 'cube',
            title: 'ERP & SaaS',
            description: 'Custom enterprise resource planning and software-as-a-service platforms tailored to your niche.',
        },
        {
            icon: 'trending-up',
            title: 'Digital Growth',
            description: 'Data-driven SEO strategies and performance marketing to scale your product\'s global reach.',
        },
    ];

    return (
        <main className="relative overflow-hidden">
            {/* Abstract Glow Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lavender/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lavender/5 rounded-full blur-[120px] pointer-events-none"></div>

            <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-lavender text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-lavender/10 border border-lavender/20">
                        What We Do
                    </span>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
                        Future-Ready{' '}
                        <GradientText
                            colors={["#7a57db", "#a855f7", "#7a57db", "#a855f7", "#7a57db"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="inline"
                        >
                            Software Solutions
                        </GradientText>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                        Empowering your business with cutting-edge technology and innovative software solutions tailored to your unique scaling needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((service, index) => (
                        <PixelCard
                            key={index}
                            variant="purple"
                            className="glass-card rounded-xl group h-full"
                        >
                            <div className="absolute inset-0 p-8 flex flex-col items-start gap-6 z-10">
                                <div className="w-14 h-14 rounded-lg bg-lavender/20 flex items-center justify-center text-lavender transition-transform group-hover:scale-110">
                                    <ion-icon name={service.icon} style={{ fontSize: '32px' }}></ion-icon>
                                </div>
                                <div>
                                    <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </PixelCard>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="flex justify-center">
                    <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-lavender/30 rounded-xl text-white font-bold hover:bg-lavender/10 hover:border-lavender transition-all group">
                        View All Services
                        <ion-icon name="arrow-forward" style={{ fontSize: '20px' }} className="transition-transform group-hover:translate-x-1"></ion-icon>
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Services;
