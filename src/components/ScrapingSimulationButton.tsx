
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { simulateWebScraping } from "@/services/eventService";

export function ScrapingSimulationButton() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSimulateScraping = async () => {
    setIsLoading(true);
    
    try {
      const targetSites = [
        'https://www.ticketmaster.com.au',
        'https://www.eventbrite.com.au',
        'https://www.moshtix.com.au'
      ];
      
      let totalEvents = 0;
      
      toast({
        title: "Starting web scraping simulation",
        description: "Connecting to event websites...",
      });
      
      for (const site of targetSites) {
        const result = await simulateWebScraping(site);
        
        if (result.success) {
          totalEvents += result.eventCount;
          toast({
            title: `Scraped ${site}`,
            description: `Found ${result.eventCount} events`,
          });
        }
      }
      
      toast({
        title: "Scraping completed",
        description: `Successfully scraped ${totalEvents} events from ${targetSites.length} websites`,
      });
      
    } catch (error) {
      toast({
        title: "Scraping failed",
        description: "There was an error scraping the event websites",
        variant: "destructive",
      });
      console.error('Scraping simulation error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Button 
      onClick={handleSimulateScraping}
      variant="outline"
      className="ml-2 animate-pulse bg-sydney-coral/10 hover:bg-sydney-coral/20 border-sydney-coral/20"
      disabled={isLoading}
    >
      {isLoading ? "Scraping..." : "Simulate Scraping"}
    </Button>
  );
}
