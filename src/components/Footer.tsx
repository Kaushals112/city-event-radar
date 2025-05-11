
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-sydney-navy text-sydney-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sydney<span className="text-sydney-coral">Events</span></h3>
            <p className="text-sm opacity-80 mb-4">
              Your one-stop destination for discovering the best events happening in Sydney, Australia.
              Our platform automatically aggregates events from across the city.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Button variant="link" className="p-0 h-auto text-sydney-light">About Us</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-sydney-light">Contact</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-sydney-light">Privacy Policy</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-sydney-light">Terms of Service</Button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="border-sydney-light/30 text-sydney-light hover:bg-sydney-light/10">Music</Button>
              <Button variant="outline" size="sm" className="border-sydney-light/30 text-sydney-light hover:bg-sydney-light/10">Art</Button>
              <Button variant="outline" size="sm" className="border-sydney-light/30 text-sydney-light hover:bg-sydney-light/10">Food</Button>
              <Button variant="outline" size="sm" className="border-sydney-light/30 text-sydney-light hover:bg-sydney-light/10">Sports</Button>
              <Button variant="outline" size="sm" className="border-sydney-light/30 text-sydney-light hover:bg-sydney-light/10">Theatre</Button>
              <Button variant="outline" size="sm" className="border-sydney-light/30 text-sydney-light hover:bg-sydney-light/10">Tech</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sydney-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">© 2025 SydneyEvents. All rights reserved.</p>
          <p className="text-sm opacity-70 mt-4 md:mt-0">
            Data automatically scraped and updated daily.
          </p>
        </div>
      </div>
    </footer>
  );
}
