import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: Auth, private router: Router, http: HttpClient) { }

  ngOnInit(): void { }

  onSubmit() {
    const formData = new FormData();
    formData.append('username', this.user.controls.username.value!);
    formData.append('password', this.user.controls.password.value!);

    this.authService.login(formData).subscribe((luser) => {
      console.log(luser);
      // if (this.authService.isUser(luser)) {
      //   //this.router.navigateByUrl('/auth/register');
      //   sessionStorage.setItem('connected', 'true');
      //   sessionStorage.setItem('user', JSON.stringify(luser));
      //   console.log('connected');
      // } else console.log('not-connected');
    });
  }
}
