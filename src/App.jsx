import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import HowWeWork from './sections/HowWeWork';
import WhyChooseUs from './sections/WhyChooseUs';
import TechStack from './sections/TechStack';
import FeaturedProjects from './sections/FeaturedProjects';
import Testimonials from './sections/Testimonials';
import CallToAction from './sections/CallToAction';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import LazySection from './components/LazySection';

const App = () => {
  return (
    <>
      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <Services />
        </LazySection>
      </div>
      <LazySection>
        <HowWeWork />
      </LazySection>
      <LazySection>
        <WhyChooseUs />
      </LazySection>
      <LazySection>
        <TechStack />
      </LazySection>
      <LazySection>
        <FeaturedProjects />
      </LazySection>
      <LazySection>
        <Testimonials />
      </LazySection>
      <LazySection>
        <CallToAction />
      </LazySection>
      <LazySection>
        <FAQ />
      </LazySection>
      <Footer />
    </>
  );
};

export default App;