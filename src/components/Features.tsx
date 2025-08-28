import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Smartphone, Users, Bell, BarChart } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-time GPS Tracking",
    description: "Track buses in real-time with accurate GPS coordinates and live location updates."
  },
  {
    icon: Clock,
    title: "Accurate Arrival Times",
    description: "Get precise estimated arrival times based on current traffic and route conditions."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Designed for low-bandwidth environments perfect for small cities and tier-2 towns."
  },
  {
    icon: Users,
    title: "Crowding Information", 
    description: "Check bus occupancy levels to plan your journey and avoid overcrowded buses."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive alerts when your bus is approaching or if there are any delays."
  },
  {
    icon: BarChart,
    title: "Route Analytics",
    description: "View route performance and historical data to choose the best travel times."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Smart Transit Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a better public transport experience in your city
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-transit transition-all duration-300 border border-border hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;