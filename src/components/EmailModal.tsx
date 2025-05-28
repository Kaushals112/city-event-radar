import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Event } from "@/types/event";
import { subscribeToEvent } from "@/services/eventService";
import { useToast } from "@/components/ui/use-toast";

interface EmailModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EmailModal({ event, isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!event) return;

    setIsSubmitting(true);

    try {
      await subscribeToEvent(email, event.id, marketingConsent);

      toast({
        title: "Success!",
        description: "Redirecting you to the ticket page...",
        duration: 3000,
      });

      setTimeout(() => {
        window.open(event.ticketUrl, "_blank");
        onClose();
        setEmail("");
        setMarketingConsent(false);
      }, 1000);
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Get Tickets for {event?.title}
          </DialogTitle>
          <DialogDescription>
            Please enter your email to continue to the ticket provider's website.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="marketing"
              checked={marketingConsent}
              onCheckedChange={(checked: boolean) => setMarketingConsent(checked)}
              disabled={isSubmitting}
            />
            <Label htmlFor="marketing">
              Send me updates about upcoming events in Sydney
            </Label>
          </div>

          <DialogFooter className="sm:justify-between mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-sydney-coral hover:bg-sydney-coral/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue to Tickets"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
