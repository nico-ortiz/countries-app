import { Component } from '@angular/core';
import { CountriesService } from '../../../countries/services/countries.service';
import { Country } from '../../../countries/interfaces/Country';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];

  searchByCountry(country: string):void {
    this.countriesService
      .searchByCountry(country)
      .subscribe(countries => {this.countries = countries});
  }
}
