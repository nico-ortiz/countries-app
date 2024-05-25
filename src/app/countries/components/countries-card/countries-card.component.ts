import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'countries-card',
  templateUrl: './countries-card.component.html',
  styleUrl: './countries-card.component.css'
})
export class CountriesCardComponent {
  @Input()
  public countries: Country[] = [];

  public count: number = 8;
  public limit: number = this.count;
  public isComponentDark!: string;

  constructor(private sharedService: SharedService) {
    sharedService.mode.subscribe(mode => this.isComponentDark = mode)
  }
}
