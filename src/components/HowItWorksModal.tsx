
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getScrapingInfo } from "@/services/eventService";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  const { steps, technologies } = getScrapingInfo();
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
       
        <Button 
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" 
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-2 text-sydney-coral">Our Scraping Process</h4>
            <ul className="space-y-2 text-sm">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-medium mr-1">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-2 text-sydney-coral">Technologies Used</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-sydney-blue mr-2" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground">
              Events are updated daily to ensure you always have access to the latest happenings in your city.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    // djjdjjd
  );
}
