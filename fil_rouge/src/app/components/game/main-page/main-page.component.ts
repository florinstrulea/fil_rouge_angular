import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { InventoryCardComponent } from '../inventory-card/inventory-card.component';
import { ModalMainPageComponent } from '../modal-main-page/modal-main-page.component';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  /*TODO : pour la partie inventaire du bas : chargé la photo du player qui a été choisit dans choose-player  + son nom*/

  houseName: string = '';
  player: any = {};

  constructor(private choosePlayerService: ChoosePlayerService, private router: Router) { }

  @ViewChild(ModalMainPageComponent) modal!: ModalMainPageComponent
  @ViewChild(InventoryCardComponent) inventoryCard!: InventoryCardComponent


  ngOnInit(): void {
    this.choosePlayerService.getBattleDTO().subscribe(res => {
      console.log(res);

      this.modal.player = res.playerDTO;
      this.player = res.playerDTO;
      this.inventoryCard.player = res.playerDTO;
      this.inventoryCard.refreshFromInventory();
      console.log(res.playerDTO);

    })

  }

  // close() {
  //   this.modal.closeModal();
  // }

  open(value: string) {
    this.modal.houseName = value;
    this.modal.openModal();
  }

  goToWar() {
    if (this.player.idArmorEquiped && this.player.idWeaponEquiped) {
      this.router.navigateByUrl('/game/arena')
    } else {
      alert('Vous ne pouvez pas combattre sans equipement!')
    }
  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log(this.modal.refresh);
  //   console.log("AVANT dans le ngOnChanges");
  //   if(this.modal.closeModal()){
  //     console.log("dans le ngOnChanges");

  //     this.inventoryCard.ngOnInit();
  //   }
}







