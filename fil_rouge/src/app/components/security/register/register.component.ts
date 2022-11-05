import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Auth } from 'src/app/services/auth/auth.service';
import { StatusService } from 'src/app/services/auth/status.service';
import { PasswordValidators } from 'src/app/validations/PasswordValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  isWorking = false;

  user: User = {} as User;
  emailExist: boolean = false;
  emailMessageError: string = '';
  emailVerification: string = '';

  registration = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        PasswordValidators.patternValidator(new RegExp('(?=.*[0-9])'), {
          requiresDigit: true,
        }),
        PasswordValidators.patternValidator(new RegExp('(?=.*[A-Z])'), {
          requiresUppercase: true,
        }),
        PasswordValidators.patternValidator(new RegExp('(?=.*[a-z])'), {
          requiresLowercase: true,
        }),
        PasswordValidators.patternValidator(new RegExp('(?=.*[$@^!%*?&])'), {
          requiresSpecialChars: true,
        }),
      ])
    ),
    passwordRepeat: new FormControl('', [
      Validators.required,
      Validators.min(6),
      //createPasswordStrengthValidator(),
    ]),
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  constructor(private authService: Auth, private statusService:StatusService) {}

  ngOnInit(): void {}

  onSubmit() {
    //this.registerService.register(this.registration.value as User).subscribe();
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
    this.authService
      .register(this.registration.value as User)
      .subscribe((data) => {

        if(this.authService.isUser(this.user))
        this.statusService.envoyerStatus({
          response : "Inscription effectuée",
          type : "info"
        });
        
      else
        this.statusService.envoyerStatus(this.user);
        this.user = data as User;
        if (this.user.email.match("L'email existe déja")) {
          this.emailVerification = this.user.email;
          console.log(this.user);
        } else {
          this.emailVerification = '';
          console.log(this.user);
        }
    })


        

  }

  checkPassword(): string {
    if (this.registration.get('password')?.hasError('required')) {
      this.emailMessageError = 'Ce champ est requis.';
    }

    return this.emailMessageError;
  }

  emptyEmailVerification() {
    if (
      this.registration.get('email')?.dirty ||
      this.registration.get('email')?.touched
    )
      this.emailVerification = '';
  }

  // convenience getter for easy access to form controls
  get f() {
    return this.registration.controls;
  }

  get passwordValid() {
    return this.registration.controls['password'].errors === null;
  }

  get requiredValid() {
    return !this.registration.controls['password'].hasError('required');
  }

  get minLengthValid() {
    return !this.registration.controls['password'].hasError('minlength');
  }

  get requiresDigitValid() {
    return !this.registration.controls['password'].hasError('requiresDigit');
  }

  get requiresUppercaseValid() {
    return !this.registration.controls['password'].hasError(
      'requiresUppercase'
    );
  }

  get requiresLowercaseValid() {
    return !this.registration.controls['password'].hasError(
      'requiresLowercase'
    );
  }

  get requiresSpecialCharsValid() {
    return !this.registration.controls['password'].hasError(
      'requiresSpecialChars'
    );
  }

  // onSubmit() {
  //   this.authService.register(this.registration.value as User)
  //   .subscribe((user) => {
  //     if(this.authService.isUser(user))
  //       this.statusService.envoyerStatus({
  //         response : "Inscription effectuée",
  //         type : "info"
  //       });
  //     else
  //       this.statusService.envoyerStatus(user);
  //   });
  //   this.checkIfEmailExist();
  //   this.submitted = true;

  //   if (this.registration.invalid) {
  //     return;
  //   }

  //   this.isWorking = true;
  //   this.registration.disable();

  //   setTimeout(() => {
  //     this.isWorking = false;
  //     this.registration.enable();
  //   }, 1500);
  // }
}
