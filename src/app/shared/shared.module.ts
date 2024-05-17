import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
