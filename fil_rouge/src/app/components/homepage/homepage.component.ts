import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthStatus } from 'src/app/interfaces/auth-status';
import { Auth } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  sub: Subscription = new Subscription;
  curAuth?: AuthStatus;
  constructor(private authService: Auth) { }

  ngOnInit(): void {
    this.sub = this.authService.curUserObservable.subscribe((user) => {
      this.curAuth = user;
    });
  }

}
