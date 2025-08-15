import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  blur?: "light" | "medium" | "strong";
  glow?: "none" | "construction" | "orange";
  animation?: "none" | "float" | "float-delayed" | "float-slow";
  size?: "sm" | "md" | "lg";
}

const FloatingCard = ({ 
  children, 
  className, 
  blur = "medium",
  glow = "none",
  animation = "float",
  size = "md"
}: FloatingCardProps) => {
  const blurClasses = {
    light: "glass-card",
    medium: "glass-card-strong",
    strong: "backdrop-blur-xl bg-glass/30 border border-glass-border/60"
  };

  const glowClasses = {
    none: "",
    construction: "construction-glow",
    orange: "orange-glow"
  };

  const animationClasses = {
    none: "",
    float: "float-animation",
    "float-delayed": "float-animation-delayed",
    "float-slow": "float-animation-slow"
  };

  const sizeClasses = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6"
  };

  return (
    <div 
      className={cn(
        "relative",
        blurClasses[blur],
        glowClasses[glow],
        animationClasses[animation],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default FloatingCard;