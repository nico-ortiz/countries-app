import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesCardComponent } from './components/countries-card/countries-card.component';



@NgModule({
  declarations: [
    CountriesCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountriesCardComponent
  ]
})
export class CountriesModule { }
