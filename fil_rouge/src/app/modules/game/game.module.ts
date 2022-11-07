import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MainPageComponent } from 'src/app/components/game/main-page/main-page.component';


import { HomeComponent } from '../../components/game/home/home.component';
import { LoginInterceptor } from '../../interceptors/login.interceptor';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';


@NgModule({
  declarations: [
    GameComponent,
    HomeComponent,
    MainPageComponent

  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }]
})
export class GameModule { }
