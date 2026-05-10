export interface Package {
  id: number;
  durationInDays: number;
  maxPeople: number;
  startDate: string;
  endDate: string;
  isActive: boolean;

  // UI fields (static)
  name?: string;
  description?: string;
  pricePerPerson?: number;
  oldPricePerPerson?: number;
  discountPercentage?: number;
  rating?: number;
  coverImage?: string;
}
