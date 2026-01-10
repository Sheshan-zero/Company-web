import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What technologies do you use for backend scalability?",
            answer: "We leverage a mix of cloud-native architectures including Kubernetes, Docker, and serverless functions. Our core high-performance microservices are primarily built using Go and Node.js to ensure maximum concurrency and minimal latency.",
            tags: ["Kubernetes", "Go", "gRPC"],
        },
        {
            question: "How does SIAT ensure data security and compliance?",
            answer: "Security is integrated into our SDLC via automated vulnerability scanning and SOC2 Type II compliant workflows. We utilize AES-256 encryption for data at rest and TLS 1.3 for data in transit, coupled with robust IAM policies.",
            tags: [],
        },
        {
            question: "Do you offer API integration for legacy systems?",
            answer: "Yes, we specialize in building middleware abstraction layers that wrap legacy SOAP or mainframe systems into modern REST or GraphQL APIs, enabling seamless integration with contemporary web and mobile interfaces.",
            tags: [],
        },
        {
            question: "What is the typical development lifecycle for a project?",
            answer: "We follow a modified Agile methodology with 2-week sprints. Our process includes Discovery, Architectural Design, CI/CD-driven Development, QA Automation, and iterative deployment cycles with stakeholder review.",
            tags: [],
        },
        {
            question: "How do you handle post-deployment maintenance?",
            answer: "Post-launch, we provide 24/7 SRE monitoring, automated error reporting via Sentry, and scheduled security patching. Our maintenance packages are tailored to ensure 99.9% uptime and continuous optimization.",
            tags: [],
        },
        {
            question: "Can your team scale according to project demands?",
            answer: "Absolutely. We maintain an elastic resource pool of specialized engineers. We can scale your dedicated squad up or down within a 30-day notice period, ensuring agility without long-term overhead commitment.",
            tags: [],
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="relative w-full flex flex-col items-center bg-grid overflow-x-hidden bg-primary py-16 lg:py-24">
            <div className="w-full max-w-[800px] px-6">
                {/* Headline Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-white text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        Technical FAQ
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Deep dive into our engineering standards, system architecture, and development processes.
                    </p>
                </div>

                {/* Accordion Section */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`accordion-item gradient-border-faq group ${openIndex === index ? "open" : ""
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="flex items-center justify-between p-6 cursor-pointer w-full text-left"
                            >
                                <span className="text-lg font-semibold text-white/90 group-hover:text-white pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-lavender transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    size={24}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                                    {faq.tags.length > 0 && (
                                        <div className="mt-4 flex gap-2 flex-wrap">
                                            {faq.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 bg-lavender/20 text-lavender text-xs rounded border border-lavender/30"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Panel / CTA */}
                <div className="mt-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                        {/* Subtle background glow for CTA */}
                        <div className="absolute -right-20 -top-20 w-40 h-40 bg-lavender/20 blur-[80px]"></div>
                        <div className="flex flex-col gap-2 relative z-10">
                            <h3 className="text-xl font-bold text-white">Still have questions?</h3>
                            <p className="text-white/60 text-sm">
                                Our engineering team is ready to help you with deeper technical insights.
                            </p>
                        </div>
                        <button className="relative z-10 flex items-center gap-2 bg-lavender hover:bg-lavender/90 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(122,87,219,0.3)] hover:scale-[1.02]">
                            <span>Reach out to our experts</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
