import { Destination } from "./Destination";
import { PackageCategory } from "./Enums/PackageCategory.enum";
import { ItineraryDay } from "./Itinerary";
import { PackagePolicy } from "./PackagePolicy";

export interface Package {

  id: number;

  slug: string;

  title: string;

  subtitle: string;

   destination: Destination;

  image: string;

  gallery: string[];

  duration: number;

  nights: number;

  category: PackageCategory;

  price: number;

  currency: string;

  rating: number;

  reviewsCount: number;

  shortDescription: string;

  description: string;

  whyChoose: string[];

  highlights: string[];

  overview: string;

  itinerary: ItineraryDay[];

  optionalTours: string[];

  includes: string[];

  excludes: string[];

  policies: PackagePolicy[];

  featured: boolean;

}
