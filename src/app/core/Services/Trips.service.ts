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

  constructor(private http: HttpClient) { }

  //=====================================
  // Create Trip
  //=====================================

  createTrip(formData: FormData): Observable<any> {

    return this.http.post(
      `${env.baseApi}Trip/CreateTrip`,
      formData
    );

  }

  //=====================================
  // Get Trips
  //=====================================

  getTrips(): Observable<Trip[]> {

    return this.http.get<Trip[]>(
      'assets/data/trips/trips-list.json'
    );

  }

  //=====================================
  // Trip Details
  //=====================================

  getTripDetails(): Observable<TripDetails[]> {

    return this.http.get<TripDetails[]>(
      'assets/data/trips/trip-details.json'
    );

  }

}
