import { Cloud, Code, ShieldCheck, Layers, CreditCard } from "lucide-react";
import GradientText from "../components/ui/GradientText";

const CallToAction = () => {
    const partners = [
        { icon: Cloud, name: "AWS" },
        { icon: Code, name: "GITHUB" },
        { icon: ShieldCheck, name: "ISO-27001" },
        { icon: Layers, name: "VERCEL" },
        { icon: CreditCard, name: "STRIPE" },
    ];

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-mesh">
            {/* Subtle Glow Layer */}
            <div className="absolute inset-0 glow-overlay pointer-events-none"></div>

            <div className="relative z-10 flex h-full grow flex-col w-full max-w-[1200px] px-6 lg:px-10">
                {/* Main CTA Section */}
                <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
                    <div className="max-w-[800px] space-y-8">
                        {/* Content Area */}
                        <div className="space-y-6">
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                Build the Future of{" "}
                                <GradientText
                                    colors={["#7a57db", "#a855f7", "#7a57db", "#a855f7", "#7a57db"]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="inline"
                                >
                                    Software
                                </GradientText>{" "}
                                with SIAT.
                            </h1>
                            <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed max-w-[650px] mx-auto">
                                From ideation to deployment, we deliver high-performance digital solutions tailored to your business needs. Experience the next generation of engineering.
                            </p>
                        </div>

                        {/* Button Group */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <button className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white text-primary text-lg font-bold transition-all hover:bg-white/90 hover:scale-105 active:scale-95 shadow-xl shadow-lavender/20">
                                <span className="truncate">Start Your Project</span>
                            </button>
                            <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white text-lg font-bold transition-all hover:bg-white/10 hover:border-white/60 active:scale-95">
                                <span className="truncate">View Our Portfolio</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trust-Building Footer */}
                <div className="w-full pb-12">
                    <div className="flex flex-col items-center gap-8">
                        {/* Meta Text */}
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-white/50 text-sm font-medium tracking-widest uppercase">
                                Partnered with industry leaders worldwide
                            </p>
                            <div className="h-[1px] w-12 bg-white/20"></div>
                        </div>

                        {/* Partner Logos */}
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-4">
                            {partners.map((partner, index) => {
                                const Icon = partner.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                    >
                                        <Icon size={28} />
                                        <span className="text-lg font-bold tracking-tight">{partner.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-[10%] -left-[5%] w-96 h-96 bg-lavender/20 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-[10%] -right-[5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
        </section>
    );
};

export default CallToAction;
