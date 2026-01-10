import { Code, Terminal, Database, Cloud, ShieldCheck, Workflow } from "lucide-react";
import GradientText from "../components/ui/GradientText";

const TechStack = () => {
    const techCategories = [
        {
            icon: Code,
            title: "Frontend",
            description: "Creating immersive, responsive user experiences with modern reactive frameworks.",
            technologies: [
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            ],
        },
        {
            icon: Terminal,
            title: "Backend",
            description: "Robust server-side logic and API architectures designed for massive scale.",
            technologies: [
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
            ],
        },
        {
            icon: Database,
            title: "Databases",
            description: "Reliable data persistence and real-time caching solutions for speed and integrity.",
            technologies: [
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                { name: "Pinecone", logo: null },
            ],
        },
        {
            icon: Cloud,
            title: "Cloud & DevOps",
            description: "Automated deployment pipelines and containerized infrastructure for agility.",
            technologies: [
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
            ],
        },
        {
            icon: ShieldCheck,
            title: "Security",
            description: "Industry-standard authentication and proactive threat detection protocols.",
            technologies: [
                { name: "OAuth2", logo: null },
                { name: "JWT", logo: null },
                { name: "SSL/TLS", logo: null },
                { name: "Pen Testing", logo: null },
            ],
        },
        {
            icon: Workflow,
            title: "Tools & Workflow",
            description: "Streamlined collaboration tools to ensure transparency and rapid delivery.",
            technologies: [
                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
                { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
            ],
        },
    ];

    return (
        <section className="relative w-full bg-primary py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h3 className="text-lavender tracking-[0.2em] text-sm md:text-base font-bold uppercase mb-4">
                        Technology Stack
                    </h3>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-3xl">
                        Built With{" "}
                        <GradientText
                            colors={["#7a57db", "#a855f7", "#7a57db", "#a855f7", "#7a57db"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="inline"
                        >
                            Modern Technologies
                        </GradientText>
                    </h1>
                    <p className="text-white/60 text-lg font-normal leading-relaxed mt-6 max-w-2xl">
                        We leverage the most advanced frameworks and tools to build scalable, high-performance software solutions for the digital age.
                    </p>
                </div>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {techCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="tech-card-border rounded-lg p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 rounded-lg bg-lavender/10 flex items-center justify-center text-lavender">
                                    <Icon size={28} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-white text-xl font-bold tracking-tight">
                                        {category.title}
                                    </h2>
                                    <p className="text-white/60 text-base leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {category.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
                                        >
                                            {tech.logo ? (
                                                <img
                                                    src={tech.logo}
                                                    alt={tech.name}
                                                    className="w-4 h-4 object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            ) : null}
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-lavender/20 to-navy/50 border border-white/10 p-10 md:p-20 flex flex-col items-center text-center">
                    <div
                        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle, #7a57db 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                        }}
                    ></div>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-6 max-w-2xl relative z-10">
                        Ready to build your next project?
                    </h2>
                    <p className="text-white/70 text-lg mb-10 max-w-xl relative z-10">
                        Our engineers are experts in modern tech stacks. Let's discuss your roadmap and turn your vision into reality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center relative z-10">
                        <button className="px-8 py-4 bg-lavender hover:bg-lavender/80 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-lavender/20">
                            Start a Project
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-xl transition-all">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
