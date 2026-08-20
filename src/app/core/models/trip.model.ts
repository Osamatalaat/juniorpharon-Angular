export interface Trip {

  id: number;

  title: string;

  slug: string;

  destination: {
    id: number;
    name: string;
    slug: string;
  };

  type: string[];

  duration: {
    value: number;
    unit: 'hours' | 'days';
    text: string;
  };

  price: number;

  oldPrice?: number;

  rating: number;

  reviews?: number;

  coverImage: string;

  images: string[];

  shortDescription: string;

  highlights: string[];

  itinerary: {
    title: string;
    description: string;
  }[];

  includes: string[];

  excludes: string[];

  whatToBring?: string[];

  goodToKnow?: string[];

  faqs?: {
    question: string;
    answer: string;
  }[];

}
