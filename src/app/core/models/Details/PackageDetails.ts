import { PackageIncludedTrip } from "./PackageIncludedTrip";
import { ReviewMedia } from "./ReviewMedia";

export interface PackageDetails {

  id: number;

  name: string;

  description: string;

  durationInDays: number;

  maxPeople: number;

  rating: number;

  pricePerPerson: number;

  oldPricePerPerson?: number;

  discountPercentage?: number;

  images: string[];

  trips: PackageIncludedTrip[];

  mediaReviews?: ReviewMedia[];

  relatedPackagesIds?: number[];
}
