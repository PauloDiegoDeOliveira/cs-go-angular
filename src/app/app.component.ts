import { Component } from '@angular/core';
import { SidenavService } from './services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cs-go-angular';
  events: string[] = [];
  opened: boolean = false;

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.navegacaoLateralAbrir_Observable.subscribe(opened => this.opened = opened);
  }

  alternarSidenav() {
    this.sidenavService.alternarSidenav();
  }
  
}