import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthStatus } from 'src/app/interfaces/auth-status';

import { Auth } from 'src/app/services/auth/auth.service';
import { StatusService } from 'src/app/services/auth/status.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sub: Subscription = new Subscription;
  curAuth?: AuthStatus;


  apiUrl: string = "";
  constructor(private authService: Auth, private statusService: StatusService, private router: Router) {
    this.apiUrl = environment.apiUrl;

  }

  ngOnInit(): void {
    this.sub = this.authService.curUserObservable.subscribe((user) => {
      this.curAuth = user;
    });

    if (sessionStorage.getItem("token")) {
      // On récupère les informations mises en cache
      this.authService.setAuthStatus({
        connected: true,
        user: JSON.parse(sessionStorage.getItem("user")!)
      });
    }
  }

  logout() {
    this.authService.logout().subscribe((message) => {
      this.statusService.envoyerStatus(message);
      this.authService.setAuthStatus({
        connected: false,
        user: undefined
      });
      sessionStorage.clear();
      this.router.navigateByUrl("/auth/login")

    })
  }

}
