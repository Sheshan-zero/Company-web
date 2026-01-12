import React, { useEffect, useRef, useState } from "react";

const ScrollStack = ({
  cards,
  backgroundColor = "bg-transparent",
  cardHeight = "70vh",
  animationDuration = "0.8s",
  sectionHeightMultiplier = 6,
  className = "",
  itemWidth = "100%",
}) => {
  const scrollableSectionRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Float for smooth interpolation

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollableDistance = sectionHeight - viewportHeight;

      let progress = 0;
      if (sectionTop <= 0) {
        progress = Math.abs(sectionTop) / scrollableDistance;
      }

      progress = Math.min(Math.max(progress, 0), 1);

      const floatIndex = progress * (cards.length - 1);
      setActiveIndex(floatIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cards.length]);

  return (
    <section ref={scrollableSectionRef} className="relative w-full">
      <div
        ref={sectionRef}
        className={`relative ${className}`}
        style={{ height: `${sectionHeightMultiplier * 100}vh` }}
      >
        <div className={`sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden ${backgroundColor}`}>
          <div className="container px-4 mx-auto h-full flex flex-col justify-center items-center">
            <div
              className="relative mx-auto flex items-center justify-center"
              // Removed fixed maxWidth here, better handled via Tailwind classes or ensuring itemWidth is responsive
              style={{ height: cardHeight, width: itemWidth, maxWidth: "1200px" }}
            >
              {cards.map((card, index) => {
                const distance = index - activeIndex;
                let style = {};

                // Animation Logic
                if (distance < 0) {
                  style = {
                    transform: `translateY(${distance * 100}%) scale(${1 + distance * 0.1})`,
                    opacity: Math.max(0, 1 + distance),
                    zIndex: 50 - index,
                    filter: `blur(${Math.abs(distance) * 10}px)`,
                    visibility: distance < -1 ? 'hidden' : 'visible'
                  };
                } else {
                  const scale = Math.max(0.85, 1 - distance * 0.05);
                  const translateY = distance * 40;
                  const opacity = Math.max(0, 1 - distance * 0.2);

                  style = {
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: 50 - index,
                    filter: distance > 0.5 ? `blur(${distance * 2}px)` : 'none'
                  };
                }

                return (
                  <div
                    key={index}
                    // Responsive Styling Updates:
                    // Max-width constraint for mobile to prevent overflow
                    // p-6 mobile, p-12 desktop
                    className="absolute inset-0 rounded-[20px] overflow-hidden glass-card transition-transform duration-75 ease-linear shadow-2xl w-full max-w-[95vw] md:max-w-full mx-auto"
                    style={style}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      {card.backgroundImage && (
                        <img
                          src={card.backgroundImage}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-[#0b0f1a]/80 backdrop-blur-sm"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent"></div>
                    </div>

                    {/* Content - Responsive Typography & Layout */}
                    <div className="relative z-10 w-full h-full p-6 md:p-12 border border-white/10 rounded-[20px] flex flex-col justify-center items-start text-left">
                      {card.badge && (
                        <div className="mb-4 md:mb-6">
                          <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-lavender/10 border border-lavender/20 text-lavender text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                            {card.badge}
                          </span>
                        </div>
                      )}

                      {/* Title: 3xl on mobile, 6xl on desktop to prevent overflow */}
                      <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg break-words max-w-full">
                        {card.title}
                      </h3>

                      {/* Subtitle: xl on mobile, 2xl on desktop */}
                      {card.subtitle && (
                        <p className="text-lg md:text-2xl text-lavender/90 mb-6 md:mb-8 font-medium">
                          {card.subtitle}
                        </p>
                      )}

                      {/* Content: lg on mobile, xl on desktop */}
                      {card.content && (
                        <div className="text-base md:text-xl text-white/70 max-w-3xl leading-relaxed">
                          {card.content}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
