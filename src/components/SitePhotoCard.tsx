import FloatingCard from "./FloatingCard";
import { Play, Shield } from "lucide-react";
import constructionSite from "@/assets/hero-construction.webp";

const SitePhotoCard = () => {
  return (
    <FloatingCard 
      className="w-56 h-56" 
      blur="medium" 
      animation="float-delayed"
    >
      <div className="h-full flex flex-col">
        <div className="flex-1 relative rounded-lg overflow-hidden">
          <img 
            src={constructionSite}
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <div className="text-xs text-white font-medium mb-1">Phase: Foundation</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-xs text-white/80">Active</span>
            </div>
          </div>
          <div className="absolute top-2 right-2">
            <Play className="w-6 h-6 text-white/80" />
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="w-full bg-secondary/50 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-construction-yellow to-construction-orange h-1.5 rounded-full" style={{width: '65%'}}></div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">65% Complete</span>
            <div className="flex items-center gap-1 bg-success/20 text-success text-xs px-2 py-0.5 rounded-full border border-success/30">
              <Shield className="w-3 h-3" />
              <span>Safety</span>
            </div>
          </div>
        </div>
      </div>
    </FloatingCard>
  );
};

export default SitePhotoCard;