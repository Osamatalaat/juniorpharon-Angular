export interface Package {

  // ================= BASIC INFO =================


  id: number;

  category:
    | 'family'
    | 'honeymoon'
    | 'luxury'
    | 'solo'
    | 'christmas'
    | 'new-year'
    | 'seasonal'
    | 'adventure'
    | 'cultural'
    | 'historical'
    | 'nature'
    | 'beach'
    | 'cruise'
    | 'wellness'
    | 'sports'
    | 'shopping'
    | 'food-and-drink'
    | 'festivals-and-events'
    | 'classic';

  title: string;

  slug: string;

  destination: {
    id: number;
    name: string;
    slug: string;
  };

  type: string[];

  // ================= DURATION =================

  duration: {
    value: number;
    unit: 'hours' | 'days';
    text: string;
  };

  // ================= PRICING =================

  price: number;

  oldPrice?: number;

  // ================= RATING =================

  rating: number;

  reviews?: number;

  // ================= IMAGES =================

  coverImage: string;

  images: string[];

  // ================= DESCRIPTIONS =================

  shortDescription: string;

  description: string;

  // ================= HIGHLIGHTS =================

  highlights: string[];

  // ================= ITINERARY =================

  itinerary: {
    day: number;
    title: string;
    description: string;
    activities?: string[];
    overnight?: string;
  }[];

  // ================= OPTIONAL TOURS =================

  optionalTours?: {
    destination: string;
    activities: string[];
  }[];

  // ================= INCLUDES =================

  includes: string[];

  // ================= EXCLUDES =================

  excludes: string[];

  // ================= POLICIES =================

  entranceFeePolicy?: string;

  // ================= GOOD TO KNOW =================

  goodToKnow?: string[];

  // ================= RELATED PACKAGES =================

  relatedPackagesIds?: number[];
}
