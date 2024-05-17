import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CountriesModule } from '../countries/countries.module';
import { FilterComponent } from '../countries/components/filter/filter.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FilterComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    CountriesModule
  ],
  exports: [
    HeaderComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
