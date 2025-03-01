
import React from 'react';
import { Scissors, Shirt, Ruler, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      title: 'Custom Suits',
      icon: <Scissors className="h-8 w-8" />,
      description: "Experience the luxury of a perfectly fitted suit designed to your exact specifications. From fabric selection to final fitting, we guide you through every step of creating a garment that's uniquely yours.",
      features: [
        'Personal consultation and styling advice',
        'Premium fabric selection',
        'Multiple fittings for perfect fit',
        'Custom details like monograms and unique linings',
        'Delivered in 3-4 weeks'
      ],
      price: 'Starting at $499',
      image: 'https://images.unsplash.com/photo-1598808503746-f34cfbf02d49?q=80&w=1528'
    },
    {
      title: 'Dress Alterations',
      icon: <Shirt className="h-8 w-8" />,
      description: "Transform your dresses to fit and flatter your body perfectly. Whether it's a simple hem adjustment or a complex resizing, our specialists ensure your dress looks like it was made just for you.",
      features: [
        'Precision fitting and marking',
        'Expert handling of delicate fabrics',
        'Wedding dress specialization',
        'Preservation of original design elements',
        'Quick turnaround available'
      ],
      price: 'Starting at $50',
      image: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?q=80&w=1470'
    },
    {
      title: 'Wedding Attire',
      icon: <Ruler className="h-8 w-8" />,
      description: 'Make your special day even more perfect with our comprehensive wedding attire services. From the bride and groom to the entire wedding party, we ensure everyone looks their absolute best.',
      features: [
        'Customized bridal gown design and alterations',
        'Groom and groomsmen suit creation or tailoring',
        'Bridesmaid dress alterations',
        'Pre-wedding fittings and consultations',
        'Emergency day-of fixes available'
      ],
      price: 'Personalized quotes available',
      image: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=1374'
    }
  ];

  const additionalServices = [
    {
      title: 'Repairs & Restorations',
      description: 'Extend the life of your beloved garments with our expert repair services.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Seasonal Custom Collections',
      description: 'Explore our ready-to-customize seasonal collections for a quicker custom experience.',
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: 'Style Consultations',
      description: 'Get professional advice on styles, fabrics, and designs that best suit your body type and preferences.',
      icon: <CheckCircle2 className="h-6 w-6" />
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Discuss your needs, preferences, and style with our expert tailors.'
    },
    {
      number: '02',
      title: 'Measurement',
      description: 'Precise measurements ensure the perfect fit for your custom garment.'
    },
    {
      number: '03',
      title: 'Design & Fabric',
      description: 'Select from premium fabrics and finalize design details.'
    },
    {
      number: '04',
      title: 'Creation',
      description: 'Our skilled tailors meticulously craft your garment with attention to detail.'
    },
    {
      number: '05',
      title: 'Fitting',
      description: 'Try on your garment for any necessary adjustments.'
    },
    {
      number: '06',
      title: 'Perfection',
      description: 'Final touches ensure your complete satisfaction with the finished piece.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4 animate-slide-in">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 animate-fade-in">Tailoring excellence for every occasion</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in">
              From custom creations to precise alterations, our comprehensive range of services ensures you always look your best.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="section">
        <div className="container-custom">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="space-y-6">
                  <div className="bg-accent/10 rounded-full p-3 inline-block mb-2">
                    <div className="text-accent">{service.icon}</div>
                  </div>
                  <h2 className="text-3xl font-serif font-medium">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-3 pt-2">
                    <h3 className="font-medium">What's included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-lg font-medium">{service.price}</p>
                    <Link to="/contact" className="btn-primary mt-4 inline-block">
                      Book Now
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-xl shadow-lg object-cover w-full h-[500px]"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-background py-2 px-4 rounded-lg shadow-lg border border-border text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
              Additional Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">More ways we can help</h2>
            <p className="text-muted-foreground">
              Beyond our core offerings, we provide a range of specialized services to meet all your clothing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border/30 text-center hover:shadow-md transition-shadow hover:translate-y-[-5px] duration-300">
                <div className="bg-accent/10 rounded-full p-4 inline-block mb-4">
                  <div className="text-accent">{service.icon}</div>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to="/contact" className="text-accent font-medium hover:underline">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">How we work</h2>
            <p className="text-muted-foreground">
              From the first consultation to the final fitting, our streamlined process ensures a seamless experience and exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border/30 hover:border-accent/30 transition-all duration-300">
                <div className="text-4xl font-serif text-accent/70 font-light mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-accent text-accent-foreground">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Ready to experience our tailoring services?</h2>
            <p className="text-accent-foreground/80 mb-8">
              Book an appointment today for a consultation with our expert tailors.
            </p>
            <Link to="/contact" className="btn-primary bg-accent-foreground text-accent">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
