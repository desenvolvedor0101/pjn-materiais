import FloatingCard from "./FloatingCard";
import { Search } from "lucide-react";

const SearchCard = () => {
  return (
    <FloatingCard 
      className="w-80 h-16" 
      blur="light" 
      animation="float"
    >
      <div className="flex items-center gap-3 h-full">
        <Search className="w-5 h-5 text-muted-foreground" />
        <input 
          type="text"
          placeholder="Buscar projeto..."
          className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
        />
        <div className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border/50">
          ⌘K
        </div>
      </div>
    </FloatingCard>
  );
};

export default SearchCard;