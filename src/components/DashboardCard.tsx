import FloatingCard from "./FloatingCard";
import { TrendingUp, BarChart3, Calendar } from "lucide-react";

const DashboardCard = () => {
  return (
    <FloatingCard 
      className="w-96 h-60 transform rotate-1 perspective-1000" 
      blur="medium" 
      glow="orange"
      animation="float-delayed"
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-foreground font-semibold">Dashboard</h3>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-construction-orange rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-construction-orange/10 to-construction-yellow/10 rounded-lg p-4 border border-construction-orange/20">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-construction-orange" />
                <span className="text-xs text-muted-foreground">Progress</span>
              </div>
              <div className="text-2xl font-bold text-foreground">78%</div>
              <div className="w-full bg-secondary/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-construction-orange to-construction-yellow h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-construction-yellow" />
                <span className="text-xs text-muted-foreground">Quality Score</span>
              </div>
              <div className="text-2xl font-bold text-foreground">9.2</div>
              <div className="text-xs text-construction-orange">+0.3 this week</div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>Updated 2 minutes ago</span>
        </div>
      </div>
    </FloatingCard>
  );
};

export default DashboardCard;