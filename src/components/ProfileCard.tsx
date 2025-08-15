import FloatingCard from "./FloatingCard";
import { Star } from "lucide-react";
import projectManagerAvatar from "@/assets/hero-construction.jpg";

const ProfileCard = () => {
  return (
    <FloatingCard 
      className="w-96 h-32 rim-light" 
      blur="strong" 
      glow="construction"
      animation="float"
    >
      <div className="flex items-center gap-4 h-full">
        <div className="relative">
          <img 
            src={projectManagerAvatar}
            alt="Project Manager Avatar"
            className="w-16 h-16 rounded-xl object-cover border border-construction-yellow/30"
          />
          <div className="absolute -top-1 -right-1 bg-construction-yellow text-primary-foreground rounded-full p-1">
            <Star className="w-3 h-3 fill-current" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-foreground font-semibold text-sm">Maria Santos</h3>
          <p className="text-muted-foreground text-xs">Project Manager</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="bg-success/20 text-success text-xs px-2 py-0.5 rounded-full border border-success/30">
              Safety Certified
            </div>
          </div>
        </div>
      </div>
    </FloatingCard>
  );
};

export default ProfileCard;