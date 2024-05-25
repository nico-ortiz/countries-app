import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Region } from '../../interfaces/region.type';
import { SharedService } from '../../../shared/services/shared.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'shared-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public isComponentDark!: string;

  constructor(
    private sharedService: SharedService,
    private countriesSerivce: CountriesService) {
    sharedService.mode.subscribe(mode => this.isComponentDark = mode)
  }
  @Output()
  public onRegion: EventEmitter<Region> = new EventEmitter();

  sendRegion(region: any) {
    this.onRegion.emit(region.target.value);
  }
}
