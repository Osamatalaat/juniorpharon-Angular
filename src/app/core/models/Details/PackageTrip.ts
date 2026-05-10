import { Trip } from "./Trip";

export interface PackageTrip {
  packageId: number;
  tripId: number;
  dayOrder: number;

  trip?: Trip; // optional populated object
}
