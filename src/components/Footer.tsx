import { Bus, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Bus className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CityBus Watch</h3>
                <p className="text-sm opacity-80">Smart Transit</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Making public transport more reliable and accessible for small cities across India.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Real-time Tracking</li>
              <li>Route Planning</li>
              <li>Arrival Predictions</li>
              <li>Crowd Information</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Report Issue</li>
              <li>Feedback</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                support@citybuswatch.in
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4" />
                +91 12345 67890
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4" />
                Punjab, India
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 CityBus Watch. Built for SIH25013 - Transportation & Logistics Challenge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;