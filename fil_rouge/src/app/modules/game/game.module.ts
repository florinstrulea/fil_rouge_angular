import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChoosePlayerComponent } from 'src/app/components/game/choose-player/choose-player.component';
import { ModalComponent } from 'src/app/components/game/choose-player/modal/modal.component';

import { MainPageComponent } from 'src/app/components/game/main-page/main-page.component';


import { HomeComponent } from '../../components/game/home/home.component';
import { LoginInterceptor } from '../../interceptors/login.interceptor';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { PlayerCardComponent } from '../../components/game/player-card/player-card.component';
import { ModalMainPageComponent } from 'src/app/components/game/modal-main-page/modal-main-page.component';
import { ArenaComponent } from 'src/app/components/game/arena/arena.component';


@NgModule({
  declarations: [
    GameComponent,
    HomeComponent,
    ModalComponent,
    ChoosePlayerComponent,
    MainPageComponent,
    PlayerCardComponent,
    ModalMainPageComponent,
    ArenaComponent,

  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }]
})
export class GameModule { }
