import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PackageFilter } from '../models/Search/package-filter';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) {}

  getPackages(): Observable<any[]> {

    return this.http.get<any[]>(
      'assets/data/packages/packages-list.json'
    );
  }

  getPackageDetails(): Observable<any> {

    return this.http.get(
      'assets/data/packages/package-details.json'
    );
  }

  searchPackages(filter: PackageFilter): Observable<any[]> {

    return this.getPackages().pipe(

      map((packages) => {

        let filteredPackages = packages.filter((pkg) => {

          const matchesName =
            !filter.name ||
            pkg.name.toLowerCase().includes(filter.name.toLowerCase());

          const matchesMinPrice =
            filter.minPrice == null ||
            pkg.pricePerPerson >= filter.minPrice;

          const matchesMaxPrice =
            filter.maxPrice == null ||
            pkg.pricePerPerson <= filter.maxPrice;

          const matchesDuration =
            !filter.durationInDays ||
            pkg.durationInDays === filter.durationInDays;

          const matchesRating =
            !filter.rating ||
            pkg.rating >= filter.rating;

          return (
            matchesName &&
            matchesMinPrice &&
            matchesMaxPrice &&
            matchesDuration &&
            matchesRating
          );
        });

        // Sorting
        if (filter.descending) {

          filteredPackages.sort(
            (a, b) => b.pricePerPerson - a.pricePerPerson
          );

        } else {

          filteredPackages.sort(
            (a, b) => a.pricePerPerson - b.pricePerPerson
          );
        }

        return filteredPackages;
      })
    );
  }
}
