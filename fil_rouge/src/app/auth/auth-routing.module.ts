import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/others/not-found/not-found.component';
import { LoginComponent } from '../components/security/login/login.component';
import { RegisterComponent } from '../components/security/register/register.component';
import { ResetMessageComponent } from '../components/security/reset-message/reset-message.component';
import { ResetPasswordComponent } from '../components/security/reset-password/reset-password.component';
import { ConnectedGuard } from '../guards/connected/connected.guard';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'login',
    canActivate: [ConnectedGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [ConnectedGuard],
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'reset-message',
    component: ResetMessageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
