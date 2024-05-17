import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'shared-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  @Output()
  public onRegion: EventEmitter<Region> = new EventEmitter();

  sendRegion(region: any) {
    this.onRegion.emit(region.target.value);
  }
}
