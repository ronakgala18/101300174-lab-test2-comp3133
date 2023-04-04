import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';
@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private readonly API_URL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.API_URL}`);
  }

  filterMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.API_URL}?launch_year=${year}`);
  }

  getMissionByFlightNumber(flightNumber: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.API_URL}/${flightNumber}`);
  }
}
