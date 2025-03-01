
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      details: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      details: 'info@tailorshop.com',
      link: 'mailto:info@tailorshop.com'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      details: '123 Fashion Street, Tailorville, TX 75001',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
    }
  ];

  const faqs = [
    {
      question: 'How long does a custom suit take to make?',
      answer: 'A custom suit typically takes 3-4 weeks from the initial consultation to the final fitting. This allows time for precise measurements, fabric ordering, construction, and any necessary adjustments.'
    },
    {
      question: 'Do you offer rush services for alterations?',
      answer: 'Yes, we offer rush alteration services for an additional fee. Depending on our current workload and the complexity of the alterations, we can usually accommodate time-sensitive requests within 2-3 business days.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: "For alterations, please bring the garment you want altered and any shoes or undergarments you'll wear with it. For custom garments, you don't need to bring anything specific, but reference images of styles you like can be helpful."
    },
    {
      question: 'How many fittings will I need for a custom garment?',
      answer: 'Most custom garments require 2-3 fittings. The first is for measurements and design, the second is to check the initial construction, and the final fitting ensures everything is perfect before completion.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4 animate-slide-in">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 animate-fade-in">Get in touch with our team</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in">
              Whether you have questions about our services or want to schedule an appointment, we're here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border/30 text-center hover:shadow-md transition-shadow hover:translate-y-[-5px] duration-300">
                <div className="bg-accent/10 rounded-full p-3 inline-block mb-4">
                  <div className="text-accent">{info.icon}</div>
                </div>
                <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-muted-foreground hover:text-accent transition-colors"
                    target={info.title === 'Location' ? '_blank' : undefined}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.details}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/30">
              <h2 className="text-2xl font-serif font-medium mb-6">Send us a message</h2>
              <ContactForm />
            </div>
            
            {/* Map & Hours */}
            <div className="space-y-8">
              {/* Map (placeholder) */}
              <div className="bg-muted rounded-xl overflow-hidden shadow-sm border border-border/30 h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26865.334412026213!2d-96.8014338!3d32.7766642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sDowntown%20Dallas%2C%20Dallas%2C%20TX!5e0!3m2!1sen!2sus!4v1687900210489!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Location Map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Business Hours */}
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border/30">
                <h2 className="text-2xl font-serif font-medium mb-4">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/30">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find quick answers to common questions about our tailoring services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
