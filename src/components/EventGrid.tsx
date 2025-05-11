
import { useState, useEffect } from "react";
import { EventCard } from "@/components/EventCard";
import { Event, EventCategory, City } from "@/types/event";
import { getEvents } from "@/services/eventService";
import { Button } from "@/components/ui/button";

interface EventGridProps {
  searchTerm: string;
  onGetTickets: (eventId: string) => void;
  selectedCity: City;
}

export function EventGrid({ searchTerm, onGetTickets, selectedCity }: EventGridProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("All");

  const categories: EventCategory[] = ["All", "Music", "Art", "Food", "Sports", "Theatre", "Tech"];
  
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const data = await getEvents(undefined, selectedCity);
        setEvents(data);
        setFilteredEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, [selectedCity]);
  
  useEffect(() => {
    // Filter events based on category and search term
    let filtered = events;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(lowerCaseSearch) ||
        event.description.toLowerCase().includes(lowerCaseSearch) ||
        event.venue.toLowerCase().includes(lowerCaseSearch)
      );
    }
    
    setFilteredEvents(filtered);
  }, [events, selectedCategory, searchTerm]);
  
  const handleCategoryChange = (category: EventCategory) => {
    setSelectedCategory(category);
  };
  
  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-sydney-blue text-xl">Loading events...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events in {selectedCity === 'All' ? 'Australia' : selectedCity}</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? "bg-sydney-blue hover:bg-sydney-blue/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold">No events found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onGetTickets={onGetTickets}
            />
          ))}
        </div>
      )}
    </div>
  );
}
