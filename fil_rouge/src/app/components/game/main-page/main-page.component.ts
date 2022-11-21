import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { PlayerCardService } from 'src/app/services/player-card/player-card.service';
import { InventoryCardComponent } from '../inventory-card/inventory-card.component';
import { ModalMainPageComponent } from '../modal-main-page/modal-main-page.component';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  /*TODO : pour la partie inventaire du bas : chargé la photo du player qui a été choisit dans choose-player  + son nom*/

  houseName: string = '';
  player: any = {};

  sub: Subscription = new Subscription();

  constructor(
    private choosePlayerService: ChoosePlayerService,
    private playerCardService: PlayerCardService,
    private router: Router
  ) {}

  @ViewChild(ModalMainPageComponent) modal!: ModalMainPageComponent;
  @ViewChild(InventoryCardComponent) inventoryCard!: InventoryCardComponent;

  ngOnInit(): void {
    this.choosePlayerService.getBattleDTO().subscribe((res) => {
      console.log(res);
      this.modal.player = res.playerDTO;
      this.player = res.playerDTO;
      this.inventoryCard.player = res.playerDTO;
      // this.inventoryCard.refreshFromInventory();
      console.log(res.playerDTO);
      // this.sub = this.playerCardService.playerObservable$.subscribe((res) => {
      //   this.player = res;
      // });
    });
  }

  // close() {
  //   this.modal.closeModal();
  // }

  open(value: string) {
    this.modal.houseName = value;
    this.modal.openModal();
  }

  goToWar() {
    this.choosePlayerService.getBattleDTO().subscribe((res) => {
      this.player = res.playerDTO;
      if (this.player.idArmorEquiped && this.player.idWeaponEquiped) {
        this.router.navigateByUrl('/game/arena');
      } else {
        alert('Vous ne pouvez pas combattre sans equipement!');
      }
    });
  }
}
