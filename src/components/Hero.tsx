
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-sydney-navy/80 to-sydney-navy/60"></div>
      <div className="container mx-auto h-full flex items-center relative z-10">
        <div className="max-w-lg px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Discover Sydney's <span className="text-sydney-coral">Best Events</span>
          </h1>
          <p className="text-lg text-sydney-light mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Find and attend the most exciting events happening across Sydney. Updated daily with fresh listings.
          </p>
          <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-sydney-coral hover:bg-sydney-coral/90">
              Browse Events
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
