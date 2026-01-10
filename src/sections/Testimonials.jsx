import { Quote, ChevronLeft, ChevronRight, ShieldCheck, Shield, CloudCheck, Terminal, Activity, Headphones, Briefcase, Users } from "lucide-react";
import client1 from "../assets/clients/1.png";
import client2 from "../assets/clients/2.png";
import client3 from "../assets/clients/3.png";
import GradientText from "../components/ui/GradientText";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "SIAT transformed our legacy infrastructure into a high-performance engine. Their engineering quality is unparalleled in the modern market.",
            name: "Udayanga Wickramathunga",
            title: "CTO, TechCorp",
            image: client1,
            featured: true,
        },
        {
            quote: "A true partner in innovation. Their team integrated seamlessly with ours to deliver ahead of schedule, exceeding our core performance metrics.",
            name: "Amali Wickramanayake",
            title: "VP of Engineering, InnovateSoft",
            image: client2,
            featured: false,
        },
        {
            quote: "The most reliable software development firm we've worked with. The glowing results speak for themselves. Highly recommended for complex builds.",
            name: "Chanaka Wakkubura",
            title: "Founder, CloudScale",
            image: client3,
            featured: false,
        },
    ];

    const trustSignals = [
        {
            icon: ShieldCheck,
            title: "SOC2 Type II",
            description: "Rigorous security controls and data protection audits.",
        },
        {
            icon: Shield,
            title: "GDPR Ready",
            description: "Full compliance with international privacy regulations.",
        },
        {
            icon: CloudCheck,
            title: "AWS Partner",
            description: "Certified expertise in cloud infrastructure scaling.",
        },
        {
            icon: Terminal,
            title: "ISO 27001",
            description: "Global standards for information security management.",
        },
    ];

    const stats = [
        { icon: Activity, value: "99.9%", label: "Uptime Guarantee" },
        { icon: Headphones, value: "24/7", label: "Expert Support" },
        { icon: Briefcase, value: "150+", label: "Projects Delivered" },
        { icon: Users, value: "50+", label: "Global Engineers" },
    ];

    return (
        <section className="relative w-full bg-primary">
            {/* Hero Header Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
                <h1 className="text-white tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-6">
                    Trusted by{" "}
                    <GradientText
                        colors={["#7a57db", "#a855f7", "#7a57db", "#a855f7", "#7a57db"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="inline"
                    >
                        Industry Leaders
                    </GradientText>
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
                    Engineering excellence delivered through authentic partnerships and proven expertise. We help the world's most ambitious companies scale their vision.
                </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10 px-4">
                        <h2 className="text-white text-2xl font-bold">Client Voices</h2>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="p-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`snap-center min-w-[320px] md:min-w-[400px] flex flex-col gap-6 p-8 rounded-xl bg-navy/80 backdrop-blur-sm transition-all hover:translate-y-[-4px] ${testimonial.featured
                                    ? "glow-border"
                                    : "border border-white/10"
                                    }`}
                            >
                                <Quote className="text-lavender text-4xl opacity-50" size={40} />
                                <p className="text-white/80 text-lg italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                                    <div
                                        className={`w-12 h-12 rounded-full bg-slate-800 bg-cover bg-center ${testimonial.featured
                                            ? "border-2 border-lavender/30"
                                            : "border-2 border-white/10"
                                            }`}
                                        style={{ backgroundImage: `url(${testimonial.image})` }}
                                    ></div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className={testimonial.featured ? "text-lavender text-sm" : "text-white/60 text-sm"}>
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trust Signals Grid */}
            <div className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Enterprise Grade Standards
                        </h2>
                        <div className="w-16 h-1 bg-lavender mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {trustSignals.map((signal, index) => {
                            const Icon = signal.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center p-6 bg-navy/50 rounded-lg border border-white/5 hover:border-lavender/50 transition-colors group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-lavender/10 flex items-center justify-center mb-4 group-hover:bg-lavender/20 transition-all">
                                        <Icon className="text-lavender" size={28} />
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{signal.title}</h3>
                                    <p className="text-white/60 text-sm">{signal.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Stats Ribbon */}
            <div className="bg-lavender py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-white">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="flex flex-col items-center md:items-start gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <Icon className="text-white" size={24} />
                                        </div>
                                        <span className="text-4xl md:text-5xl font-bold">{stat.value}</span>
                                    </div>
                                    <span className="text-white/70 text-sm font-medium tracking-widest uppercase">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
