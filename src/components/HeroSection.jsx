
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1623232769150-dbb4a1987ee1?q=80&w=2340")',
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center container-custom">
        <div className="max-w-xl animate-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
            Craftsmanship at its finest
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight">
            Bespoke tailoring for the modern individual
          </h1>
          <p className="mt-6 text-lg text-white/90">
            We combine traditional techniques with modern styles to create clothing that's perfectly fitted to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services" className="btn-primary inline-flex items-center">
              Explore Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-10 rounded-full bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-[scroll_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
