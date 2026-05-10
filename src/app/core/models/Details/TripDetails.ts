import { Trip } from './Trip';
import { TripImage } from './TripImage';
import { TripItinerary } from './TripItinerary';
import { TripContent } from './TripContent';
import { ReviewMedia } from './ReviewMedia';

export interface TripDetails extends Trip {
  images: TripImage[];
  itineraries: TripItinerary[];
  contents: TripContent[];

  mediaReviews?: ReviewMedia[];
  relatedTrips?: Trip[];
}
