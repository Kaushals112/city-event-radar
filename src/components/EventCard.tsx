
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Event } from "@/types/event";
import { formatDate } from "@/utils/dateUtils";

interface EventCardProps {
  event: Event;
  onGetTickets: (eventId: string) => void;
}

export function EventCard({ event, onGetTickets }: EventCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-sydney-coral text-white px-3 py-1 font-semibold rounded-tr-md">
          {event.category}
        </div>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(event.date)} • {event.time}</span>
        </div>
        <h3 className="font-semibold text-lg line-clamp-2 mb-1">{event.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{event.venue}</p>
        <p className="text-sm line-clamp-3">{event.description}</p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 flex justify-between items-center">
        <span className="font-semibold text-sydney-navy">{event.price}</span>
        <Button 
          onClick={() => onGetTickets(event.id)}
          className="bg-sydney-blue hover:bg-sydney-blue/90"
        >
          GET TICKETS
        </Button>
      </CardFooter>
    </Card>
  );
}
