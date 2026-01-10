import { Search, Palette, Code, Shield, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "../components/ui/radial-orbital-timeline";
import Antigravity from "../components/Antigravity";
import GradientText from "../components/ui/GradientText";

const HowWeWork = () => {
    const workflowData = [
        {
            id: 1,
            title: "Discovery & Planning",
            date: "Week 1-2",
            content: "We dive deep into your business goals, target audience, and project requirements to create a comprehensive roadmap.",
            category: "Planning",
            icon: Search,
            relatedIds: [2],
            status: "completed",
            energy: 100,
        },
        {
            id: 2,
            title: "Design & Prototyping",
            date: "Week 3-4",
            content: "Our design team crafts stunning UI/UX prototypes that bring your vision to life with modern aesthetics and user-centric flows.",
            category: "Design",
            icon: Palette,
            relatedIds: [1, 3],
            status: "completed",
            energy: 90,
        },
        {
            id: 3,
            title: "Development",
            date: "Week 5-8",
            content: "Expert developers build your solution using cutting-edge technologies, ensuring scalability, performance, and clean code.",
            category: "Development",
            icon: Code,
            relatedIds: [2, 4],
            status: "in-progress",
            energy: 70,
        },
        {
            id: 4,
            title: "Testing & Security",
            date: "Week 9-10",
            content: "Rigorous QA testing and security audits ensure your product is bug-free, secure, and ready for real-world use.",
            category: "Testing",
            icon: Shield,
            relatedIds: [3, 5],
            status: "pending",
            energy: 40,
        },
        {
            id: 5,
            title: "Deployment & Support",
            date: "Week 11+",
            content: "Seamless deployment to production with ongoing maintenance, updates, and dedicated support to ensure continued success.",
            category: "Launch",
            icon: Rocket,
            relatedIds: [4],
            status: "pending",
            energy: 20,
        },
    ];

    return (
        <section className="relative w-full bg-primary">
            {/* Section Header - Outside the orbital container */}
            <div className="w-full py-4 md:py-6 text-center bg-primary">
                <span className="text-lavender text-xs font-bold tracking-[0.2em] uppercase mb-2 px-4 py-1.5 rounded-full bg-lavender/10 border border-lavender/20 inline-block">
                    Our Process
                </span>
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mt-3 mb-2">
                    How We{" "}
                    <GradientText
                        colors={["#7a57db", "#a855f7", "#7a57db", "#a855f7", "#7a57db"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="inline"
                    >
                        Work
                    </GradientText>
                </h2>
                <p className="text-white/60 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-6">
                    Click on any node to explore our streamlined workflow process
                </p>
            </div>

            {/* Orbital Timeline with Antigravity Background */}
            <div className="w-full h-[600px] md:h-[750px] lg:h-[900px] relative">
                {/* Antigravity Background - Behind everything */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                    <Antigravity
                        count={150}
                        magnetRadius={8}
                        ringRadius={9}
                        waveSpeed={0.3}
                        waveAmplitude={0.8}
                        particleSize={1.2}
                        lerpSpeed={0.05}
                        color={'#7a57db'}
                        autoAnimate={true}
                        particleVariance={1}
                    />
                </div>
                {/* Timeline on top - Interactive layer */}
                <div className="absolute inset-0" style={{ zIndex: 10, pointerEvents: 'auto' }}>
                    <RadialOrbitalTimeline timelineData={workflowData} />
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
