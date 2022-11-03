import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Auth } from 'src/app/services/auth/auth.service';
import { createPasswordStrengthValidator } from 'src/app/validations/PasswordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = {} as User;
  emailExist: boolean = false;
  emailMessageError: string = '';
  emailVerification: string = '';

  registration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(3),
      //createPasswordStrengthValidator(),
    ]),
    passwordRepeat: new FormControl('', [
      Validators.required,
      Validators.min(3),
      //createPasswordStrengthValidator(),
    ]),
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  constructor(private registerService: Auth) {}

  ngOnInit(): void {}

  onSubmit() {
    this.registerService.register(this.registration.value as User).subscribe();
    // console.log(this.registration.value);
    this.checkIfEmailExist();
  }

  checkEmail(): string {
    if (this.registration.get('email')?.hasError('required')) {
      this.emailMessageError = "L'email est requis.";
    } else if (!this.validateEmail(this.registration.value.email!)) {
      this.emailMessageError = 'Le champ ne respecte pas le format email.';
    }

    return this.emailMessageError;
  }

  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  checkIfEmailExist() {
    this.registerService
      .register(this.registration.value as User)
      .subscribe((data) => {
        this.user = data;
        if (this.user.email.match("L'email existe déja")) {
          this.emailVerification = this.user.email;

          console.log(this.user);
        } else {
          this.emailVerification = '';
          console.log(this.user);
        }
      });
  }
  checkPassword(): string {
    if (this.registration.get('password')?.hasError('required')) {
      this.emailMessageError = 'Le password est requis.';
    }

    return this.emailMessageError;
  }
}
