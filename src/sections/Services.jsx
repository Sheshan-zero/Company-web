import React from 'react';
import GradientText from '../components/ui/GradientText';
import ScrollStack from '../components/lightswind/scroll-stack';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Web Development",
            subtitle: "High-performance full-stack web applications",
            badge: "Service",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
            content: "Modern React, Next.js, and backend solutions built for scale, performance, and security."
        },
        {
            id: 2,
            title: "UI/UX Design",
            subtitle: "Designs that convert and engage",
            badge: "Service",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
            content: "User-centric design, research-driven interfaces, and delightful digital experiences."
        },
        {
            id: 3,
            title: "Cloud & DevOps",
            subtitle: "Scalable infrastructure & CI/CD",
            badge: "Service",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
            content: "AWS, Docker, Kubernetes, and automated deployment pipelines for reliable delivery."
        },
        {
            id: 4,
            title: "Cybersecurity",
            subtitle: "Enterprise-grade protection",
            badge: "Service",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
            content: "Security audits, vulnerability assessments, and data protection strategies."
        },
        {
            id: 5,
            title: "ERP & SaaS",
            subtitle: "Custom business platforms",
            badge: "Service",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
            content: "Tailored ERP systems and SaaS products built to fit your business workflows."
        },
        {
            id: 6,
            title: "Digital Growth",
            subtitle: "SEO & performance marketing",
            badge: "Service",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
            content: "Data-driven growth strategies to scale traffic, conversions, and revenue."
        }
    ];

    return (
        <main className="relative bg-[#030412]">
            {/* Abstract Glow Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lavender/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lavender/5 rounded-full blur-[120px]"></div>
            </div>

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

                {/* ScrollStack Implementation */}
                <div className="w-full flex justify-center items-center">
                    <ScrollStack
                        cards={services.map(s => ({
                            ...s,
                            backgroundImage: s.image,
                            content: s.content
                        }))}
                        itemWidth="90%"
                        cardHeight="70vh"
                        sectionHeightMultiplier={6}
                        animationDuration="0.8s"
                        backgroundColor="bg-transparent"
                        className="z-10"
                    />
                </div>

                {/* Footer CTA */}
                <div className="mt-20 flex justify-center">
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
