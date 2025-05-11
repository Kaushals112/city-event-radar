
import { Event, EventCategory, City } from "@/types/event";

// Mock data representing events scraped from various websites
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Sydney Symphony Orchestra: Beethoven's Fifth",
    description: "Experience the iconic Symphony No. 5 in C minor performed by the renowned Sydney Symphony Orchestra. This timeless masterpiece will captivate you with its famous four-note opening motif that resounds through music history.",
    date: "2025-05-25",
    time: "19:30",
    venue: "Sydney Opera House",
    address: "Bennelong Point, Sydney NSW 2000",
    category: "Music",
    image: "https://images.unsplash.com/photo-1518603668334-2f961fb33366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ticketUrl: "https://sydneyoperahouse.com",
    price: "$85 - $250",
    organizer: "Sydney Symphony Orchestra",
    city: "Sydney"
  },
  {
    id: "2",
    title: "Contemporary Art Exhibition: New Horizons",
    description: "Explore groundbreaking works from Australia's emerging artists in this limited-time exhibition that challenges perceptions and inspires conversation about our collective future.",
    date: "2025-05-18",
    time: "10:00 - 18:00",
    venue: "Museum of Contemporary Art Australia",
    address: "140 George St, The Rocks NSW 2000",
    category: "Art",
    image: "https://images.unsplash.com/photo-1594784237760-4f79bff0098e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    ticketUrl: "https://mca.com.au",
    price: "$25",
    organizer: "MCA Australia",
    city: "Sydney"
  },
  {
    id: "3",
    title: "Sydney Food Festival 2025",
    description: "Indulge in culinary delights from over 100 of Sydney's best restaurants, food trucks, and artisan producers. Featuring live cooking demonstrations, wine tastings, and more.",
    date: "2025-06-02",
    time: "11:00 - 22:00",
    venue: "Circular Quay",
    address: "Circular Quay, Sydney NSW 2000",
    category: "Food",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    ticketUrl: "https://sydneyfoodfestival.com.au",
    price: "$15 - $75",
    organizer: "Taste of Sydney",
    city: "Sydney"
  },
  {
    id: "4",
    title: "Sydney FC vs Melbourne Victory",
    description: "The rivalry continues in this high-stakes A-League clash between Sydney FC and Melbourne Victory. Don't miss the action as these football giants battle for supremacy.",
    date: "2025-05-21",
    time: "19:45",
    venue: "Allianz Stadium",
    address: "Moore Park Road, Moore Park NSW 2021",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80",
    ticketUrl: "https://sydneyfc.com",
    price: "$35 - $120",
    organizer: "Football Australia",
    city: "Sydney"
  },
  {
    id: "5",
    title: "Hamilton: The Musical",
    description: "The Tony Award-winning phenomenon finally arrives in Sydney! Don't throw away your shot to see this revolutionary tale of America's founding father Alexander Hamilton.",
    date: "2025-05-30",
    time: "19:00",
    venue: "Capitol Theatre",
    address: "13 Campbell St, Haymarket NSW 2000",
    category: "Theatre",
    image: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1665&q=80",
    ticketUrl: "https://hamiltonmusical.com.au",
    price: "$70 - $250",
    organizer: "Capitol Theatre Productions",
    city: "Sydney"
  },
  {
    id: "6",
    title: "Sydney Tech Summit 2025",
    description: "Connect with industry leaders, discover cutting-edge innovations, and explore the future of technology at Australia's premier tech conference. Featuring keynotes, workshops, and networking opportunities.",
    date: "2025-06-10",
    time: "09:00 - 17:00",
    venue: "International Convention Centre Sydney",
    address: "14 Darling Dr, Sydney NSW 2000",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://sydneytechsummit.com.au",
    price: "$199 - $499",
    organizer: "TechEvents Australia",
    city: "Sydney"
  },
  {
    id: "7",
    title: "Jazz Under the Stars",
    description: "Enjoy an evening of smooth jazz and soul music under Sydney's sparkling night sky. Featuring local and international jazz artists in the beautiful botanic gardens setting.",
    date: "2025-06-15",
    time: "19:00 - 22:00",
    venue: "Royal Botanic Garden",
    address: "Mrs Macquaries Rd, Sydney NSW 2000",
    category: "Music",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://jazzunderthestars.com.au",
    price: "$45",
    organizer: "Sydney Jazz Club",
    city: "Sydney"
  },
  {
    id: "8",
    title: "Sydney Writers' Festival",
    description: "Australia's largest celebration of literature, stories, ideas, and community. Meet your favorite authors, attend thought-provoking panels, and discover your next great read.",
    date: "2025-05-28",
    time: "Various times",
    venue: "Carriageworks",
    address: "245 Wilson St, Eveleigh NSW 2015",
    category: "Art",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://swf.org.au",
    price: "$0 - $45",
    organizer: "Sydney Writers' Festival Ltd",
    city: "Sydney"
  },
  {
    id: "9",
    title: "Melbourne Coffee Festival",
    description: "Celebrate Melbourne's world-famous coffee culture with tastings, workshops, and competitions showcasing the city's best baristas and roasters.",
    date: "2025-06-05",
    time: "10:00 - 18:00",
    venue: "Melbourne Convention Centre",
    address: "1 Convention Centre Pl, South Wharf VIC 3006",
    category: "Food",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://melbournecoffeefestival.com.au",
    price: "$25",
    organizer: "Coffee Victoria",
    city: "Melbourne"
  },
  {
    id: "10",
    title: "Brisbane Comedy Festival",
    description: "Laugh until your sides hurt at this annual comedy extravaganza featuring local and international stand-up comedians, improv troupes, and comedy shows.",
    date: "2025-05-20",
    time: "19:30",
    venue: "Brisbane Powerhouse",
    address: "119 Lamington St, New Farm QLD 4005",
    category: "Theatre",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    ticketUrl: "https://brisbanecomedyfestival.com",
    price: "$35 - $75",
    organizer: "Brisbane Powerhouse",
    city: "Brisbane"
  }
];

export const getEvents = (category?: EventCategory, city?: City): Promise<Event[]> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      let filteredEvents = [...mockEvents];
      
      if (category && category !== 'All') {
        filteredEvents = filteredEvents.filter(event => event.category === category);
      }
      
      if (city && city !== 'All') {
        filteredEvents = filteredEvents.filter(event => event.city === city);
      }
      
      resolve(filteredEvents);
    }, 500);
  });
};

export const getEventById = (id: string): Promise<Event | undefined> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(mockEvents.find(event => event.id === id));
    }, 200);
  });
};

export const subscribeToEvent = (email: string, eventId: string, marketingConsent: boolean): Promise<boolean> => {
  return new Promise((resolve) => {
    // Simulate API call
    console.log(`Subscription data: Email - ${email}, Event ID - ${eventId}, Marketing consent - ${marketingConsent}`);
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

// In a real implementation, this would be a function that triggers the web scraping
export const refreshEventData = (): Promise<boolean> => {
  return new Promise((resolve) => {
    console.log("Triggering event data refresh (simulated)");
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

// New function to explain how the scraping logic works in a real implementation
export const getScrapingInfo = (): { steps: string[], technologies: string[] } => {
  return {
    steps: [
      "1. Schedule regular crawls of event websites using a serverless function",
      "2. Parse HTML content from these websites using libraries like Cheerio",
      "3. Extract structured data for event details (title, date, venue, etc.)",
      "4. Clean and normalize the data to ensure consistency",
      "5. Store events in a database with timestamps for updates",
      "6. Set up a deduplication system to avoid duplicate events",
      "7. Provide API endpoints to query events by city, category, and date"
    ],
    technologies: [
      "Node.js for serverless functions",
      "Cheerio/JSDOM for HTML parsing",
      "Axios for HTTP requests",
      "Supabase/PostgreSQL for data storage",
      "Cron jobs for scheduling regular scrapes",
      "OpenAI API for content categorization"
    ]
  };
};
