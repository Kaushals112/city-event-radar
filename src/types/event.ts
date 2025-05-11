
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  category: string;
  image: string;
  ticketUrl: string;
  price: string;
  organizer: string;
}

export type EventCategory = 'Music' | 'Art' | 'Food' | 'Sports' | 'Theatre' | 'Tech' | 'All';

export interface EmailSubscription {
  email: string;
  eventId: string;
  marketingConsent: boolean;
}
