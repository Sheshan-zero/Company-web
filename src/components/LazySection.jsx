import { useEffect, useRef, useState } from 'react';

const LazySection = ({
    children,
    threshold = 0.1,
    rootMargin = '50px',
    placeholder = null
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasLoaded) {
                    setIsVisible(true);
                    setHasLoaded(true);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin, hasLoaded]);

    return (
        <div
            ref={sectionRef}
            className={`lazy-section ${isVisible ? 'lazy-section-visible' : ''}`}
            style={{
                minHeight: isVisible ? 'auto' : '400px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
        >
            {isVisible ? children : (placeholder || <div className="w-full h-96" />)}
        </div>
    );
};

export default LazySection;
