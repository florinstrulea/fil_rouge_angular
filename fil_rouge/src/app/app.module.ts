import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/security/login/login.component';


import { ImageLeftComponent } from './components/security/utils/image-left/image-left.component';
import { LoginFormComponent } from './components/security/utils/login-form/login-form.component';
import { RegisterFormComponent } from './components/security/utils/register-form/register-form.component';
import { ResetFormComponent } from './components/security/utils/reset-form/reset-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


    ImageLeftComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ResetFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
