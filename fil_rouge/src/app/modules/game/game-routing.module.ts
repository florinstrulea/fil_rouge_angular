import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from 'src/app/components/game/arena/arena.component';
import { ChoosePlayerComponent } from 'src/app/components/game/choose-player/choose-player.component';
import { HomeComponent } from 'src/app/components/game/home/home.component';
import { MainPageComponent } from 'src/app/components/game/main-page/main-page.component';
import { ArenaGuard } from 'src/app/guards/arena/arena.guard';
import { MainPageGuard } from 'src/app/guards/main-page/main-page.guard';
import { AuthenticationGuard } from '../../guards/auth/authentication.guard';
import { GameComponent } from './game.component';

const routes: Routes = [

  {
    path: '', canActivate: [AuthenticationGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'choose-player', component: ChoosePlayerComponent },
      { path: 'main-page', canActivate: [MainPageGuard], component: MainPageComponent },
      { path: 'arena', canActivate: [ArenaGuard], component: ArenaComponent }


    ],
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
