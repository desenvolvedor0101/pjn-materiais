import FloatingCard from "./FloatingCard";
import { Shield, Calendar, DollarSign } from "lucide-react";

const TagChips = () => {
  const tags = [
    { label: "Safety", icon: Shield, color: "success" },
    { label: "Schedule", icon: Calendar, color: "info" },
    { label: "Budget", icon: DollarSign, color: "warning" }
  ];

  return (
    <div className="flex flex-col gap-3">
      {tags.map((tag, index) => (
        <FloatingCard 
          key={tag.label}
          className="w-28 h-12 opacity-80 hover:opacity-100 transition-opacity" 
          blur="light"
          animation="none"
        >
          <div className="flex items-center gap-2 h-full">
            <tag.icon className={`w-4 h-4 text-${tag.color}`} />
            <span className="text-xs text-foreground font-medium">{tag.label}</span>
          </div>
        </FloatingCard>
      ))}
    </div>
  );
};

export default TagChips;