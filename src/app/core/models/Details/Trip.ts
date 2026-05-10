export interface Trip {
  id: number;
  title: string;
  description: string;
  location: string;
  city: string;
  durationInDays: number;
  createdBy: string;
  createdAt: string;

  // optional UI fields (static data)
  price?: number;
  oldPrice?: number;
  coverImage?: string;
  rating?: number;
}
