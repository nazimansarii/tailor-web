
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, price, linkTo }) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border/30 hover:border-accent/20 transition-all duration-300 hover:translate-y-[-5px] animate-scale-in">
      <div className="p-6 sm:p-8">
        <div className="mb-4 text-accent">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
        {price && (
          <p className="text-sm text-muted-foreground mb-3">Starting at <span className="font-medium text-foreground">${price}</span></p>
        )}
        <p className="text-muted-foreground mb-6">{description}</p>
        <a 
          href={linkTo || "#"} 
          className="inline-flex items-center text-sm font-medium text-accent group-hover:translate-x-1 transition-transform"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
