import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchBoxComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
