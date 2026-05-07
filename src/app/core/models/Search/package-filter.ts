export interface PackageFilter {

  search?: string;

  minPrice?: number;

  maxPrice?: number;

  durationInDays?: number;

  tripsCount?: number;

  rating?: number;

  peopleCount?: number;

  descending?: boolean;

  pageIndex?: number;

  pageSize?: number;
}
