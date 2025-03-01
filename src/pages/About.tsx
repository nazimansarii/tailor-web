
import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Satisfied Clients', value: '10,000+' },
    { label: 'Custom Garments', value: '15,000+' },
    { label: 'Expert Tailors', value: '12' }
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on quality, using only the finest materials and techniques in everything we create.',
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: 'Personalization',
      description: 'Every client is unique, and we take pride in creating garments that reflect individual style and preferences.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Expertise',
      description: 'Our master tailors have decades of experience and continue to refine their craft every day.',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'Timeliness',
      description: 'We respect your time and strive to deliver all projects on schedule without compromising quality.',
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const team = [
    {
      name: 'Robert Chen',
      role: 'Master Tailor & Founder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374',
      bio: 'With over 30 years of experience, Robert founded our shop with a vision of bringing traditional tailoring techniques to modern designs.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Alterations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374',
      bio: 'Maria specializes in complex alterations and has transformed thousands of garments with her exceptional attention to detail.'
    },
    {
      name: 'James Wilson',
      role: 'Custom Suit Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470',
      bio: 'James has designed suits for business executives, celebrities, and wedding parties, bringing elegance to every creation.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4 animate-slide-in">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 animate-fade-in">Our story of thread and needle</h1>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-in">
              Since 1995, we've been crafting exceptional garments that combine traditional techniques with contemporary style, ensuring each piece is as unique as the person wearing it.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1587" 
                alt="Tailor measuring a suit" 
                className="rounded-xl shadow-lg object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471" 
                  alt="Tailor working" 
                  className="rounded-xl shadow-lg h-72 w-56 object-cover border-4 border-background"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-medium">From humble beginnings to tailoring excellence</h2>
              <p className="text-muted-foreground">
                What began as a small family workshop has grown into a renowned establishment trusted by clients from all walks of life. Our journey started when Robert Chen, our founder, opened a small shop with just two sewing machines and a passion for craftsmanship.
              </p>
              <p className="text-muted-foreground">
                As word spread about the quality of our work, we expanded our team and services. Today, we blend traditional techniques passed down through generations with modern innovations, creating garments that honor the past while embracing the future.
              </p>
              <p className="text-muted-foreground">
                Throughout our growth, we've maintained our commitment to personalized service, treating each client as an individual with unique needs and preferences. This philosophy has earned us a loyal clientele that returns year after year for tailoring they can trust.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-accent text-accent-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-serif font-semibold mb-2">{stat.value}</h3>
                <p className="text-accent-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">What drives our craftsmanship</h2>
            <p className="text-muted-foreground">
              Our core values shape everything we do, from the first measurement to the final stitch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border/30 hover:shadow-md transition-shadow">
                <div className="bg-accent/10 rounded-full p-3 inline-block mb-4">
                  <div className="text-accent">{value.icon}</div>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Meet our master tailors</h2>
            <p className="text-muted-foreground">
              The skilled hands and creative minds behind every garment we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border/30 hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium">{member.name}</h3>
                  <p className="text-accent text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
