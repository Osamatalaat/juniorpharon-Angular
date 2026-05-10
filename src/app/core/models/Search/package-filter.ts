export interface PackageFilter {

  search?: string;
  name?: string;

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
