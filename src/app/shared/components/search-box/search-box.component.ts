import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  txtInput! : ElementRef<HTMLInputElement>;

  @Output()
  public onValue : EventEmitter<string> = new EventEmitter();

  public sendCountry(country: string): void {
    this.onValue.emit(country);
    console.log(country);
  }
}
