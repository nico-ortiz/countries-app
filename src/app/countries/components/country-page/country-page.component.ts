import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  private countryToSave?: Country;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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

  objectKeys(obj: {[key: string]: string}) {
    return Object.values(obj);
  }

  borderCountries(obj: string[]) {
    const countries: string[] = [];
    obj.forEach(country => {
      countries.push(this.getCountryByAlphaCode(country));
    })
  }

  getCountryByAlphaCode(code: string): any {
      this.countriesService.searchByAlphaCode(code).subscribe((countryObs) => {
        if (!countryObs)
          return ;
        return this.countryToSave = countryObs;
      });
  }
}
