
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  };
  
  return new Date(dateString).toLocaleDateString('en-AU', options);
};

export const isUpcoming = (dateString: string): boolean => {
  const eventDate = new Date(dateString);
  const today = new Date();
  return eventDate >= today;
};

export const getDaysUntil = (dateString: string): number => {
  const eventDate = new Date(dateString);
  const today = new Date();
  const diffTime = eventDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
