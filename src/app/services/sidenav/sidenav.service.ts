import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private navegacaoLateralAbrir = new BehaviorSubject<boolean>(false);
  public navegacaoLateralAbrir_Observable = this.navegacaoLateralAbrir.asObservable();

  alternarSidenav() {
    this.navegacaoLateralAbrir.next(!this.navegacaoLateralAbrir.getValue());
  }

  constructor() { }
}
