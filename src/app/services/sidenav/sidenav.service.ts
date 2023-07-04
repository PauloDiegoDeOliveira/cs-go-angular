import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _sidenavOpen = new BehaviorSubject<boolean>(false);
  public sidenavOpen$ = this._sidenavOpen.asObservable();

  toggleSidenav() {
    this._sidenavOpen.next(!this._sidenavOpen.getValue());
  }

  constructor() { }
}
