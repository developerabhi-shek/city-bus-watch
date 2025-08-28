import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import heroBus from "@/assets/hero-bus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Never Miss Your
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Bus Again</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Real-time tracking for public transport in small cities. Get accurate arrival times, 
              route information, and never wait in uncertainty again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" className="group">
                Start Tracking
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Routes
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="p-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Real-time</span>
                </div>
                <p className="text-sm text-muted-foreground">GPS tracking</p>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="font-semibold text-foreground">Accurate</span>
                </div>
                <p className="text-sm text-muted-foreground">Arrival times</p>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="h-5 w-5 text-warning" />
                  <span className="font-semibold text-foreground">Community</span>
                </div>
                <p className="text-sm text-muted-foreground">Driven updates</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl shadow-transit border border-border overflow-hidden">
              <img 
                src={heroBus} 
                alt="Modern public transport bus" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-10 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-secondary rounded-full opacity-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;