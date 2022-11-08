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
  authenticated: string = '';
  storedUser: any = {};

  errorMessage = "L'email / username ou mot de passe n'est pas valid";
  invalidLogin = false;


  login = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: Auth, private router: Router, http: HttpClient) { }

  ngOnInit(): void { }

  onSubmit() {
    if (!sessionStorage.getItem('token')) {
      let user: UserLogin = {} as UserLogin;
      user.password = this.login.controls.password.value!;
      user.username = this.login.controls.username.value!;
      this.authService.login(user).subscribe((res) => {
        if (res) {
          console.log(res);
          this.invalidLogin = false;
          this.authenticated = res.authenticated;
          this.storedUser = res.principal;
          sessionStorage.setItem('token', this.authenticated);
          sessionStorage.setItem('user', JSON.stringify(this.storedUser));
          this.authService.setAuthStatus({
            connected: true,
            user: JSON.parse(sessionStorage.getItem("user")!)
          });
          this.router.navigateByUrl("/game/home");
        } else {
          this.invalidLogin = true;
          this.errorMessage = "L'email / username ou mot de passe n'est pas valid"

        }
      });
    } else {
      this.login.reset();

    }


  }

  emptyFields() {
    if (
      this.login.get('username')?.dirty ||
      this.login.get('username')?.touched
    ) {
      this.errorMessage = '';
      this.invalidLogin = false;
    }

  }


}
