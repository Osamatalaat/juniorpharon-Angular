export interface PackageFilter {

  minPrice?: number;

  maxPrice?: number;

  durationMin?: number;

  durationMax?: number;

  durationUnit?: 'hours' | 'days';

  rating?: number;

  pageIndex?: number;

  pageSize?: number;

}
