import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchByCountry(country: string): Observable<Country[]> {
    const url: string = `${this.url}/name/${country}`;
    return this.getCountriesRequest(url);
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url: string = `${this.url}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}
