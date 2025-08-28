import { Button } from "@/components/ui/button";
import { Bus, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Bus className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CityBus Watch</h1>
              <p className="text-xs text-muted-foreground">Real-time tracking</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <MapPin className="h-4 w-4" />
              Routes
            </Button>
            <Button variant="ghost" size="sm">
              <Clock className="h-4 w-4" />
              Schedule
            </Button>
            <Button variant="transit" size="sm">
              Track Bus
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;