import FloatingCard from "./FloatingCard";
import { Building, Users } from "lucide-react";

const StatsCard = () => {
  return (
    <FloatingCard 
      className="w-44 h-20 shadow-2xl" 
      blur="strong" 
      animation="float-slow"
    >
      <div className="flex items-center justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building className="w-4 h-4 text-construction-yellow" />
            <span className="text-xs text-muted-foreground">Projects</span>
          </div>
          <div className="text-xl font-bold text-foreground">124</div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 mb-1 justify-end">
            <Users className="w-4 h-4 text-construction-orange" />
            <span className="text-xs text-muted-foreground">On-site</span>
          </div>
          <div className="text-xl font-bold text-foreground">42</div>
        </div>
      </div>
    </FloatingCard>
  );
};

export default StatsCard;