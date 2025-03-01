
import React from 'react';
import { Scissors, MessagesSquare, ShoppingBag, Sparkles } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      title: 'Custom Suits',
      description: 'Tailored to fit your exact measurements and style preferences, our custom suits are crafted with precision and care.',
      icon: <Scissors className="h-6 w-6" />,
      price: '499',
    },
    {
      title: 'Alterations',
      description: 'Transform your existing garments with our expert alteration services. From simple hemming to complex restructuring.',
      icon: <MessagesSquare className="h-6 w-6" />,
      price: '50',
    },
    {
      title: 'Wedding Attire',
      description: 'Make your special day even more memorable with custom wedding dresses, suits, and accessories for the entire wedding party.',
      icon: <Sparkles className="h-6 w-6" />,
      price: '799',
    },
    {
      title: 'Repairs',
      description: 'Extend the life of your favorite garments with our comprehensive repair services, from fixing tears to replacing zippers.',
      icon: <ShoppingBag className="h-6 w-6" />,
      price: '25',
    }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Business Executive',
      comment: 'The custom suit I ordered exceeded all my expectations. The fit is perfect and the attention to detail is remarkable. Will definitely be ordering more.',
      rating: 5,
    },
    {
      name: 'Sophia Chen',
      role: 'Wedding Client',
      comment: 'They altered my wedding dress to perfection. The team was patient, attentive, and made sure everything was exactly how I wanted it.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Regular Customer',
      comment: 'I've been coming here for years for all my tailoring needs. Their work is consistently excellent and their customer service is top-notch.',
      rating: 4,
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium">Crafting perfection through tradition and innovation</h2>
              <p className="text-muted-foreground">
                Founded in 1995, our tailor shop has been a cornerstone of quality craftsmanship in the community. We combine traditional techniques passed down through generations with modern innovations to deliver garments that are both timeless and contemporary.
              </p>
              <p className="text-muted-foreground">
                Every stitch we make is a commitment to excellence, ensuring that each garment not only fits perfectly but also reflects your unique style and personality.
              </p>
              <Link to="/about" className="btn-secondary inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2487" 
                alt="Tailor at work" 
                className="rounded-xl shadow-lg object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 rounded-full p-3">
                    <Scissors className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">25+ Years</p>
                    <p className="text-sm text-muted-foreground">of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Tailored to your needs</h2>
            <p className="text-muted-foreground">
              From custom creations to intricate alterations, we offer a comprehensive range of tailoring services to meet all your clothing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                linkTo="/services"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">What our clients say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it – hear from our satisfied customers about their experiences with our tailoring services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                comment={testimonial.comment}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-accent text-accent-foreground">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Ready to experience the perfect fit?</h2>
            <p className="text-accent-foreground/80 mb-8">
              Book an appointment today and let our expert tailors create or transform your garments to perfection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-accent-foreground text-accent">
                Book Appointment
              </Link>
              <Link to="/services" className="btn-secondary bg-transparent border border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
