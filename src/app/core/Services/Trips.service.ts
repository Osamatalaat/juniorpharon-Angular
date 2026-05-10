
import { Injectable } from '@angular/core';
import { env } from '../../Environment/env';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TripFilter } from '../models/Search/trip-filter';
import { Trip } from '../models/Details/Trip';
import { TripDetails } from '../models/Details/TripDetails';


@Injectable({
  providedIn: 'root'
})
export class TripsService {

//   constructor(private http: HttpClient) { }
//  searchTrips(filter: TripFilter): Observable<any> {
//     let params = new HttpParams();
//     Object.keys(filter).forEach(key => {
//       if (filter[key as keyof TripFilter] !== undefined && filter[key as keyof TripFilter] !== null) {
//         params = params.set(key, filter[key as keyof TripFilter] as any);
//       }
//     });
//     return this.http.get(`${env.baseApi}Trip/SearchTrip`, { params });
//   }

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {

    return this.http.get<Trip[]>(
      'assets/data/trips/trips-list.json'
    );
  }

  // Trip Details
  getTripDetails(): Observable<TripDetails[]> {

    return this.http.get<TripDetails[]>(
      'assets/data/trips/trip-details.json'
    );
  }

}
