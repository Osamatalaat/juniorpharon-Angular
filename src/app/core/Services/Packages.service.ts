import { Injectable } from '@angular/core';
import { env } from '../../Environment/env';
import { PackageFilter } from '../models/Search/package-filter';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {


  constructor(private http: HttpClient) { }
 searchPackages(filter: PackageFilter): Observable<any> {
    let params = new HttpParams();
    Object.keys(filter).forEach(key => {
      if (filter[key as keyof PackageFilter] !== undefined && filter[key as keyof PackageFilter] !== null) {
        params = params.set(key, filter[key as keyof PackageFilter] as any);
      }
    });
    return this.http.get(`${env.baseApi}Trip/SearchTrip`, { params });
  }

}
