
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, comment, rating = 5, image }) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i} 
      className={`h-4 w-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-muted'}`} 
    />
  ));

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border/30 animate-slide-in">
      {/* Rating stars */}
      <div className="flex space-x-1 mb-4">
        {stars}
      </div>
      
      {/* Testimonial content */}
      <blockquote className="text-foreground mb-6">
        "{comment}"
      </blockquote>
      
      {/* Customer info */}
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover border border-border/50"
            />
          </div>
        )}
        <div>
          <h4 className="font-medium">{name}</h4>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
