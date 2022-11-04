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
  user = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: Auth, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login(this.user.value as UserLogin).subscribe((luser) => {
      if (this.authService.isUser(luser)) {
        //this.router.navigateByUrl('/auth/register');
        sessionStorage.setItem('connected', 'true');
        sessionStorage.setItem('user', JSON.stringify(luser));
        console.log('connected');
      } else console.log('not-connected');
    });
  }
}
