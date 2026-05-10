export interface TripItinerary {
  id: number;
  dayNumber: number;
  title: string;
  description: string;
  tripId: number;

  // UI fields
  activities?: string[];
  image?: string;
  open?: boolean;
}
