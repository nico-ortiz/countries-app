import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesCardComponent } from './components/countries-card/countries-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    CountriesCardComponent,
    FilterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class CountriesModule { }
