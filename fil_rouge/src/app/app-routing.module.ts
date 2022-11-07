import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { NotFoundComponent } from './components/others/not-found/not-found.component';
import { AuthenticationGuard } from './guards/auth/authentication.guard';
import { HomeComponent } from './components/game/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    component: AuthComponent,
  },

  { path: 'game', loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule) },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
