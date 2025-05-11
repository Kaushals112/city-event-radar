
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getScrapingInfo } from "@/services/eventService";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  const { steps, technologies } = getScrapingInfo();
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">How Event Scraping Works</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Our automated system constantly refreshes event data from across the web
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div>
            <h3 className="font-medium mb-2 text-sydney-blue">The Process</h3>
            <ul className="space-y-2 list-disc pl-5">
              {steps.map((step, index) => (
                <li key={index} className="text-sm">{step}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2 text-sydney-blue">Technologies Used</h3>
            <ul className="space-y-1 list-disc pl-5">
              {technologies.map((tech, index) => (
                <li key={index} className="text-sm">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
