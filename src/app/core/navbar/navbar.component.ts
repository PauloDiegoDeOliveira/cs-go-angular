import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  paginaLogin: boolean | undefined;
  events: string[] = [];
  opened: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private sidenavService: SidenavService) {
    this.router.events.subscribe(() => {
      this.paginaLogin = this.router.url === '/login';
    });
    
    this.sidenavService.sidenavOpen$.subscribe(opened => this.opened = opened);
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

}
