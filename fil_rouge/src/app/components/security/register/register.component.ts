import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Auth } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registration = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    passwordRepeat: new FormControl(''),
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private registerService: Auth) {}

  ngOnInit(): void {}

  onSubmit() {
    this.registerService.register(this.registration.value as User).subscribe();
    console.log(this.registration.value);
  }
}
