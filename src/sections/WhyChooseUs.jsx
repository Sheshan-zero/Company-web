import { Zap, Shield, Cpu, Layers, TrendingUp, CheckCircle, Verified } from "lucide-react";
import PixelCard from "../components/PixelCard";
import GradientText from "../components/ui/GradientText";

const WhyChooseUs = () => {
    const features = [
        {
            icon: Zap,
            title: "Rapid Deployment",
            description: "Accelerated development cycles without compromising code integrity or performance benchmarks.",
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Built-in compliance and robust data protection protocols at every layer of your application.",
        },
        {
            icon: Cpu,
            title: "Modern Stack",
            description: "Leveraging the latest frameworks for future-proof scalability and developer productivity.",
        },
        {
            icon: Layers,
            title: "Seamless Integration",
            description: "Plug-and-play architecture that fits natively into your existing enterprise ecosystem.",
        },
    ];

    const stats = [
        {
            label: "Projects Delivered",
            value: "150+",
            trend: "+12% YoY",
            icon: TrendingUp,
        },
        {
            label: "Security Score",
            value: "99.9%",
            trend: "+2%",
            icon: TrendingUp,
        },
        {
            label: "Uptime Guarantee",
            value: "99.99%",
            trend: "Verified",
            icon: CheckCircle,
        },
    ];

    return (
        <section className="relative w-full bg-primary py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="flex flex-col gap-6 pb-16 text-center items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/20 border border-lavender/30">
                        <Verified size={14} className="text-lavender" />
                        <span className="text-lavender text-xs font-bold uppercase tracking-widest">Our Edge</span>
                    </div>
                    <div className="flex flex-col gap-4 max-w-[720px]">
                        <h1 className="text-white tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Why SIAT is the Strategic Choice for{" "}
                            <GradientText
                                colors={["#7a57db", "#a855f7", "#7a57db", "#a855f7", "#7a57db"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="inline"
                            >
                                Scaling
                            </GradientText>
                        </h1>
                        <p className="text-white/60 text-base md:text-lg font-normal leading-relaxed">
                            High-trust solutions for modern tech startups looking to lead the market through superior engineering and rapid execution.
                        </p>
                    </div>
                </div>

                {/* 4-Column Feature Grid with PixelCard */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <PixelCard
                                key={index}
                                variant="purple"
                                className="glass-card rounded-xl group h-full"
                            >
                                <div className="absolute inset-0 p-6 flex flex-col gap-5 z-10">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-lavender/10 text-lavender border border-lavender/20 transition-transform group-hover:scale-110">
                                        <Icon size={28} className="icon-glow" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-white text-xl font-bold leading-tight">
                                            {feature.title}
                                        </h2>
                                        <p className="text-white/60 text-sm font-normal leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </PixelCard>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300"
                            >
                                <p className="text-white/60 text-sm font-medium leading-normal">
                                    {stat.label}
                                </p>
                                <p className="text-white tracking-light text-2xl font-bold leading-tight">
                                    {stat.value}
                                </p>
                                <p className="text-mint text-sm font-medium leading-normal flex items-center gap-1">
                                    <Icon size={16} /> {stat.trend}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Final CTA */}
                <div className="flex flex-col items-center justify-center gap-8 py-10 px-4 bg-lavender/5 rounded-3xl border border-lavender/10">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                            Ready to transform your tech?
                        </h3>
                        <p className="text-white/60 text-base md:text-lg">
                            Join 50+ high-growth startups scaling with SIAT.
                        </p>
                    </div>
                    <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-lavender text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-lavender/20 hover:scale-[1.02] transition-all">
                        <span className="truncate">Schedule a Consultation</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
