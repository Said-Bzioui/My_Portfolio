
import { Link } from 'react-router-dom';
import {ArrowRight } from 'lucide-react';

const ActivityCard = ({ Img, Title, Description, id }) => {



  return (
    <div className="group relative w-full">
            
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-card/90 to-surface-raised/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-secondary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-secondary/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-4 z-10 ">
          <div className="relative overflow-hidden rounded-lg  h-45">
            <img
              src={Img}
              alt={Title}
                              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary-pale via-secondary-pale to-secondary-pale bg-clip-text text-transparent">
              {Title}
            </h3>
            
            <p className="text-muted-foreground/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>
            
            <div className="pt-4 flex items-center justify-between">
              
                <Link
                  to={`/activity/${id}`}
                  className="flex w-full items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-secondary/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;