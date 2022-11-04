import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthStatus } from 'src/app/interfaces/auth-status';
import { Auth } from 'src/app/services/auth/auth.service';
import { StatusService } from 'src/app/services/auth/status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sub : Subscription = new Subscription;
  curAuth? : AuthStatus;


  constructor(private authService : Auth, private statusService : StatusService) { }

  ngOnInit(): void {
    this.sub = this.authService.curUserObservable.subscribe((user) =>{
      this.curAuth = user;
    });
  }

}
