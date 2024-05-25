import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountryPageComponent } from './components/country-page/country-page.component';

const routes: Routes = [
  {
    path: 'search',
    component: HomePageComponent
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    path: '**',
    redirectTo: 'search'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
