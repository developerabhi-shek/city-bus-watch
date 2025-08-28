import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, MapPin, Clock, Users, RefreshCw } from "lucide-react";

interface BusInfo {
  id: string;
  route: string;
  destination: string;
  arrivalTime: string;
  status: "on-time" | "delayed" | "approaching";
  occupancy: "low" | "medium" | "high";
  nextStop: string;
}

const mockBuses: BusInfo[] = [
  {
    id: "BUS001",
    route: "Route 1A",
    destination: "City Center",
    arrivalTime: "2 min",
    status: "approaching",
    occupancy: "medium",
    nextStop: "Main Street"
  },
  {
    id: "BUS002", 
    route: "Route 2B",
    destination: "University",
    arrivalTime: "7 min",
    status: "on-time",
    occupancy: "low",
    nextStop: "Park Avenue"
  },
  {
    id: "BUS003",
    route: "Route 3C", 
    destination: "Hospital",
    arrivalTime: "12 min",
    status: "delayed",
    occupancy: "high",
    nextStop: "Station Road"
  }
];

const BusTracker = () => {
  const [buses, setBuses] = useState<BusInfo[]>(mockBuses);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-time": return "success";
      case "delayed": return "warning";
      case "approaching": return "default";
      default: return "secondary";
    }
  };

  const getOccupancyColor = (occupancy: string) => {
    switch (occupancy) {
      case "low": return "success";
      case "medium": return "warning"; 
      case "high": return "destructive";
      default: return "secondary";
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Live Bus Tracking
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Real-time updates for buses near your location
          </p>
          <Button 
            variant="outline" 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="mb-8"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {buses.map((bus) => (
            <Card key={bus.id} className="hover:shadow-transit transition-all duration-300 border border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {bus.route}
                  </CardTitle>
                  <Badge variant={getStatusColor(bus.status) as any}>
                    {bus.status.replace('-', ' ')}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{bus.destination}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Bus className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Bus ID: {bus.id}</p>
                    <p className="text-sm text-muted-foreground">Arriving in {bus.arrivalTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Next Stop</p>
                    <p className="text-sm text-muted-foreground">{bus.nextStop}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Occupancy:</span>
                  </div>
                  <Badge variant={getOccupancyColor(bus.occupancy) as any} className="text-xs">
                    {bus.occupancy}
                  </Badge>
                </div>

                <Button variant="transit" className="w-full mt-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Track on Map
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusTracker;