import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePlayerComponent } from 'src/app/components/game/choose-player/choose-player.component';
import { HomeComponent } from 'src/app/components/game/home/home.component';
import { AuthenticationGuard } from '../../guards/auth/authentication.guard';
import { GameComponent } from './game.component';

const routes: Routes = [

  {
    path: '', canActivate: [AuthenticationGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'choose-player', component: ChoosePlayerComponent }


    ],
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
