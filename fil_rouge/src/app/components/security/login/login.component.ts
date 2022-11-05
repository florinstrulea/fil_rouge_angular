import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/interfaces/user-login';

import { Auth } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  sessionId: string = '';
  storedUser: any = {};
  login = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: Auth, private router: Router, http: HttpClient) { }

  ngOnInit(): void { }

  onSubmit() {
    let user: UserLogin = {} as UserLogin;
    user.password = this.login.controls.password.value!;
    user.username = this.login.controls.username.value!;
    this.authService.login(user).subscribe((res) => {
      if (res) {
        console.log(res);
        this.sessionId = res.details.sessionId;
        this.storedUser = res.principal;
        sessionStorage.setItem('token', this.sessionId);
        sessionStorage.setItem('user', JSON.stringify(this.storedUser));
        this.router.navigateByUrl("/game");
      } else {
        alert("Authentication failed !")
      }

      // if (this.authService.isUser(luser)) {
      //   //this.router.navigateByUrl('/auth/register');
      //   sessionStorage.setItem('connected', 'true');
      //   sessionStorage.setItem('user', JSON.stringify(luser));
      //   console.log('connected');
      // } else console.log('not-connected');
    });

  }
}
