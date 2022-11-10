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
import { InventoryCardComponent } from '../../components/game/inventory-card/inventory-card.component';
import { ArenaComponent } from 'src/app/components/game/arena/arena.component';
import { PotionCardComponent } from 'src/app/components/game/inventory-card/potion-card/potion-card.component';
import { WeaponCardComponent } from 'src/app/components/game/inventory-card/weapon-card/weapon-card.component';
import { ArmorCardComponent } from 'src/app/components/game/inventory-card/armor-card/armor-card.component';
import { ModalaEquiperComponent } from '../../components/game/inventory-card/modal-equiper/modala-equiper/modala-equiper.component';



@NgModule({
  declarations: [
    GameComponent,
    HomeComponent,
    ModalComponent,
    ChoosePlayerComponent,
    MainPageComponent,
    PlayerCardComponent,
    ModalMainPageComponent,
    InventoryCardComponent,
    ArenaComponent,
    PotionCardComponent,
    WeaponCardComponent,
    ArmorCardComponent,
    ModalaEquiperComponent,

  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }]
})
export class GameModule { }
