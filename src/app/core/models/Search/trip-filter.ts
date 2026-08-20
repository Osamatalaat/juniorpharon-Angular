export interface TripFilter {

  city?: string[];

  minPrice?: number;

  maxPrice?: number;

  durationMin?: number;

  durationMax?: number;

  durationUnit?: 'hours' | 'days';

  rating?: number;

  descending?: boolean;

  pageIndex?: number;

}
