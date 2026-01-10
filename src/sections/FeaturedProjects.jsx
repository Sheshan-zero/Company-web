import { ArrowRight, Grid3x3 } from "lucide-react";
import GradientText from "../components/ui/GradientText";

const FeaturedProjects = () => {
    const projects = [
        {
            title: "SaaS Analytics Platform",
            category: "Web Application",
            description: "Real-time data visualization dashboard providing actionable insights for growth-stage startups.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
            technologies: [
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "D3.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            ],
        },
        {
            title: "Enterprise ERP System",
            category: "Enterprise Solution",
            description: "A comprehensive resource planning suite designed to scale operations across multiple global branches.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
            technologies: [
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            ],
        },
        {
            title: "Secure Cloud Infrastructure",
            category: "DevOps & Security",
            description: "Hardened, high-availability cloud architecture optimized for fintech and security-first organizations.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
            technologies: [
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
                { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            ],
        },
    ];

    return (
        <section className="relative w-full bg-primary py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-white tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Featured{" "}
                        <GradientText
                            colors={["#7a57db", "#a855f7", "#7a57db", "#a855f7", "#7a57db"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="inline"
                        >
                            Projects
                        </GradientText>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                        Explore our latest premium work in SaaS, Enterprise solutions, and cutting-edge Cloud Infrastructure.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="glowing-border card-shadow flex flex-col group overflow-hidden"
                        >
                            {/* Project Image */}
                            <div className="w-full h-52 bg-center bg-no-repeat bg-cover rounded-t-xl overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Category Badge */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-lavender/20 text-lavender text-xs font-bold uppercase tracking-wider border border-lavender/30">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-2xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Tech Stack with Icons */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-[11px] px-2 py-1 rounded bg-white/5 text-white/60 border border-white/10 flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                                        >
                                            {tech.logo && (
                                                <img
                                                    src={tech.logo}
                                                    alt={tech.name}
                                                    className="w-3 h-3 object-contain"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            )}
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer Link */}
                                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                                    <a
                                        className="flex items-center gap-2 text-lavender font-bold text-sm group/btn transition-all hover:gap-3"
                                        href="#"
                                    >
                                        View Case Study
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Centered Bottom CTA */}
                <div className="flex justify-center mt-8">
                    <button className="flex items-center gap-3 px-8 py-4 border-2 border-lavender text-lavender rounded-xl font-bold hover:bg-lavender hover:text-white transition-all group">
                        View All Projects
                        <Grid3x3 size={20} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
