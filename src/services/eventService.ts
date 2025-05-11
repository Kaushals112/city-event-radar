
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
  },
  // Adding more events for other cities and categories to ensure we have full coverage
  {
    id: "11",
    title: "Perth Food & Wine Festival",
    description: "A weekend celebration of Western Australia's finest culinary traditions, featuring local chefs, wineries, and food producers.",
    date: "2025-06-08",
    time: "11:00 - 20:00",
    venue: "Elizabeth Quay",
    address: "The Esplanade, Perth WA 6000",
    category: "Food",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://perthfoodfestival.com.au",
    price: "$20 - $85",
    organizer: "Taste of Perth",
    city: "Perth"
  },
  {
    id: "12",
    title: "Adelaide Fringe Festival",
    description: "Australia's second-largest annual arts festival featuring over 1,200 events across Adelaide, from comedy to cabaret, theatre to visual arts.",
    date: "2025-05-15",
    time: "Various times",
    venue: "Various venues across Adelaide",
    address: "Adelaide SA 5000",
    category: "Art",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://adelaidefringe.com.au",
    price: "$15 - $60",
    organizer: "Adelaide Fringe Inc",
    city: "Adelaide"
  },
  {
    id: "13",
    title: "Melbourne Tech Week",
    description: "Australia's largest technology conference bringing together innovators, entrepreneurs, and industry leaders to showcase cutting-edge technology.",
    date: "2025-06-20",
    time: "09:00 - 18:00",
    venue: "Melbourne Exhibition Centre",
    address: "2 Clarendon St, South Wharf VIC 3006",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://melbournetechweek.com.au",
    price: "$150 - $450",
    organizer: "Victorian Innovation Hub",
    city: "Melbourne"
  },
  {
    id: "14",
    title: "Brisbane Lions vs Gold Coast Suns",
    description: "The Queensland derby comes to the Gabba as the Brisbane Lions face off against the Gold Coast Suns in this AFL clash.",
    date: "2025-05-30",
    time: "19:20",
    venue: "The Gabba",
    address: "Vulture St, Woolloongabba QLD 4102",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    ticketUrl: "https://afl.com.au/tickets",
    price: "$25 - $95",
    organizer: "Australian Football League",
    city: "Brisbane"
  },
  {
    id: "15",
    title: "Adelaide Symphony Orchestra: Film Classics",
    description: "Experience the magic of film scores performed live by the Adelaide Symphony Orchestra, featuring music from iconic movies across decades.",
    date: "2025-06-12",
    time: "19:30",
    venue: "Adelaide Festival Centre",
    address: "King William St, Adelaide SA 5000",
    category: "Music",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://adelaidesymphony.com.au",
    price: "$60 - $150",
    organizer: "Adelaide Symphony Orchestra",
    city: "Adelaide"
  },
  {
    id: "16",
    title: "Perth Theatre Company: Macbeth",
    description: "A modern interpretation of Shakespeare's darkest tragedy, exploring ambition, madness, and the supernatural in this acclaimed production.",
    date: "2025-05-22",
    time: "19:00",
    venue: "Heath Ledger Theatre",
    address: "174-176 William St, Perth WA 6000",
    category: "Theatre",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://perththeatre.com.au",
    price: "$45 - $115",
    organizer: "Perth Theatre Company",
    city: "Perth"
  },
  {
    id: "17",
    title: "Melbourne Cricket Ground: Test Match",
    description: "Australia takes on England in this highly anticipated cricket test match at the iconic MCG.",
    date: "2025-06-18",
    time: "10:00 - 17:00",
    venue: "Melbourne Cricket Ground",
    address: "Brunton Ave, Richmond VIC 3002",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1747&q=80",
    ticketUrl: "https://cricket.com.au/tickets",
    price: "$30 - $150",
    organizer: "Cricket Australia",
    city: "Melbourne"
  },
  {
    id: "18",
    title: "Perth Developer Conference",
    description: "A gathering of software developers, designers and tech entrepreneurs to share knowledge and network across various technology domains.",
    date: "2025-06-25",
    time: "09:00 - 17:00",
    venue: "Perth Convention Centre",
    address: "21 Mounts Bay Rd, Perth WA 6000",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ticketUrl: "https://perthdevcon.com",
    price: "$180 - $320",
    organizer: "Perth Tech Association",
    city: "Perth"
  },
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

// New function to simulate the web scraping process in a more detailed way
export const simulateWebScraping = (targetSite: string): Promise<{success: boolean, eventCount: number}> => {
  return new Promise((resolve) => {
    console.log(`Simulating web scraping for ${targetSite}...`);
    
    // This would be a real web scraping operation in production
    setTimeout(() => {
      // In reality, this would return actual scraped events
      resolve({
        success: true,
        eventCount: Math.floor(Math.random() * 20) + 5 // Simulate finding 5-25 events
      });
    }, 1500);
  });
};

// New function to demonstrate how events would be extracted from HTML
export const extractEventFromHtml = (html: string): Partial<Event> | null => {
  // In a real implementation, this would use Cheerio or JSDOM to parse HTML
  // and extract event details based on CSS selectors or XPath
  
  // This is a dummy implementation
  if (!html || html.trim().length === 0) {
    return null;
  }
  
  // Simulate parsing HTML
  console.log("Extracting event data from HTML snippet");
  
  // In reality, we would have code like:
  // const $ = cheerio.load(html);
  // const title = $('h1.event-title').text();
  // const date = $('.event-date').text();
  // etc.
  
  return {
    title: "Extracted Event Title",
    date: "2025-06-30",
    venue: "Extracted Venue Name",
    category: "Music"
  };
};
