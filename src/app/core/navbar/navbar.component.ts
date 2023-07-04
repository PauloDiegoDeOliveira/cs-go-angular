import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  paginaLogin: boolean | undefined;
  events: string[] = [];
  opened: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.paginaLogin = this.router.url === '/login';
    });
  }

}
