import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  public countries: Country[] = [];
  public isComponentDark!: string;

  constructor(
    private countriesService: CountriesService,
    private sharedService: SharedService
  ) {
    this.sharedService.mode.subscribe(mode => this.isComponentDark = mode);
  }

  searchByCountry(country: string):void {
    this.countriesService
      .searchByCountry(country)
      .subscribe(countries => {this.countries = countries});
  }

  searchByRegion(region: Region) {
    this.countriesService
      .searchByRegion(region)
      .subscribe(countries => {this.countries = countries});
  }
}
