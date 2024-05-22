import { Component, Input, OnInit } from '@angular/core';
import { Country, Currencies } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public countries: Country[] = [];
  private countryToSave?: Country;
  public isComponentDark!: string;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.sharedService.mode.subscribe(mode => this.isComponentDark = mode);
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchByAlphaCode(id))
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return this.country = country;
      })
  }

  getCurrencyName(country: Country):string {
    if (country.currencies) {
      const currencyKey = Object.keys(country.currencies)[0];
      if (currencyKey) {
        const currency = country.currencies[currencyKey as keyof Currencies];
        if (currency) {
          return currency.name;
        }
      }
    }
    return '';
  }

  objectKeys(obj: {[key: string]: string}) {
    return Object.values(obj);
  }

  borderCountries(country: Country): string[] {
    if (country.borders) {
      this.countriesService.searchCountriesByCodes(country.borders)
        .subscribe(countries => this.countries = countries);

      const bordersCountries: string[] = [];
      this.countries.forEach((country) => {
        bordersCountries.push(country.name.common)
      });
      return bordersCountries;
    }
    return [];
  }

  getCountryByAlphaCode(code: string): any {
      this.countriesService.searchByAlphaCode(code).subscribe((countryObs) => {
        if (!countryObs)
          return ;
        return this.countryToSave = countryObs;
      });
  }
}
