import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public initialValue: string = '';

  @ViewChild('txtInput')
  txtInput! : ElementRef<HTMLInputElement>;

  @Output()
  public onDebounce : EventEmitter<string> = new EventEmitter();

  public isComponentDark!: string;

  constructor(private sharedService: SharedService) {
    sharedService.mode.subscribe(mode => this.isComponentDark = mode)
  }

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  public sendCountry(country: string): void {
    this.debouncer.next(country);
  }
}
