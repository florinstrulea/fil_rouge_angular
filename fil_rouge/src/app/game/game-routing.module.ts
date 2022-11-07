import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePlayerComponent } from '../components/game/choose-player/choose-player.component';
import { AuthenticationGuard } from '../guards/auth/authentication.guard';
import { GameComponent } from './game.component';

const routes: Routes = [

  {
    path: '', canActivate: [AuthenticationGuard], children: [
      { path: 'choose-player', component: ChoosePlayerComponent }
    ],
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
