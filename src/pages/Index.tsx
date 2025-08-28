import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusTracker from "@/components/BusTracker";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BusTracker />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
