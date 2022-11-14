import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../components/security/login/login.component';
import { RegisterComponent } from '../../components/security/register/register.component';
import { ResetMessageComponent } from '../../components/security/reset-message/reset-message.component';
import { ResetPasswordComponent } from '../../components/security/reset-password/reset-password.component';


import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    ResetMessageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],

})
export class AuthModule { }
