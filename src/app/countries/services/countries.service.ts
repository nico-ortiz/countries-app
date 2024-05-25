import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  };

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchByCountry(country: string): Observable<Country[]> {
    const url: string = `${this.url}/name/${country}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = {term: country, countries})
      );
  }

  searchByRegion(region: Region): Observable<Country[]> {
    const url: string = `${this.url}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion = {region, countries})
    );
  }

  searchByAlphaCode(code: string) : Observable<Country | null> {
    const url: string = `${this.url}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length === 0 ? null : countries[0]),
        catchError(error => of(null))
      );
  }

  searchCountriesByCodes(countriesCodes: string[]): Observable<Country[]> {
    const url: string = `${this.url}/alpha?codes=${countriesCodes.join(',')}`;
    return this.http.get<Country[]>(url);
  }
}
