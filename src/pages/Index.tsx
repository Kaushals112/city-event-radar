
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventGrid } from "@/components/EventGrid";
import { EmailModal } from "@/components/EmailModal";
import { HowItWorksModal } from "@/components/HowItWorksModal";
import { Footer } from "@/components/Footer";
import { Event, City } from "@/types/event";
import { getEventById } from "@/services/eventService";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City>("Sydney");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleGetTickets = async (eventId: string) => {
    try {
      const event = await getEventById(eventId);
      if (event) {
        setSelectedEvent(event);
        setIsEmailModalOpen(true);
      }
    } catch (error) {
      console.error("Error getting event details:", error);
    }
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
  };
  
  const openHowItWorksModal = () => {
    setIsHowItWorksModalOpen(true);
  };
  
  const closeHowItWorksModal = () => {
    setIsHowItWorksModalOpen(false);
  };
  
  const handleCityChange = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      <main className="flex-grow">
        <Hero 
          onCityChange={handleCityChange} 
          selectedCity={selectedCity}
          onHowItWorksClick={openHowItWorksModal}
        />
        <div id="events-section">
          <EventGrid 
            searchTerm={searchTerm}
            onGetTickets={handleGetTickets}
            selectedCity={selectedCity}
          />
        </div>
        <EmailModal 
          event={selectedEvent}
          isOpen={isEmailModalOpen}
          onClose={closeEmailModal}
        />
        <HowItWorksModal
          isOpen={isHowItWorksModalOpen}
          onClose={closeHowItWorksModal}
        />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Index;
