
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventGrid } from "@/components/EventGrid";
import { EmailModal } from "@/components/EmailModal";
import { Footer } from "@/components/Footer";
import { Event } from "@/types/event";
import { getEventById } from "@/services/eventService";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleGetTickets = async (eventId: string) => {
    try {
      const event = await getEventById(eventId);
      if (event) {
        setSelectedEvent(event);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error getting event details:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      <main className="flex-grow">
        <Hero />
        <EventGrid 
          searchTerm={searchTerm}
          onGetTickets={handleGetTickets}
        />
        <EmailModal 
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Index;
