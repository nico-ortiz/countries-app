import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private modeSubject: BehaviorSubject<'dark'|'light'> = new BehaviorSubject<'dark'|'light'>('light');

  public get mode(): Observable<'dark'|'light'> {
    return this.modeSubject.asObservable();
  }

  public switchMode(newMode:'dark'|'light') :void {
    this.modeSubject.next(newMode);
  }
}
