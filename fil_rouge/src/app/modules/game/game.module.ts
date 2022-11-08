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


@NgModule({
  declarations: [
    GameComponent,
    HomeComponent,
    ModalComponent,
    ChoosePlayerComponent,
    MainPageComponent

  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }]
})
export class GameModule { }
