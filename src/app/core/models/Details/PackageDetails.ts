import { Package } from "./package";
import { PackageTrip } from "./PackageTrip";
import { PricingTier } from "./PricingTier";
import { Review } from "./Review";
import { PackageContent } from "./PackageContent";

export interface PackageDetails extends Package {
  packageTrips: PackageTrip[];
  pricingTiers: PricingTier[];
  reviews: Review[];
  contents: PackageContent[];
}
