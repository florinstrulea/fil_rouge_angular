import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { ArmorCardComponent } from './armor-card/armor-card.component';
import { PotionCardComponent } from './potion-card/potion-card.component';
import { WeaponCardComponent } from './weapon-card/weapon-card.component';

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.css']
})
export class InventoryCardComponent implements OnInit {
  player: any = {};
  listPotionsExist: boolean = false;
  listImagesPotions = new Array();

  constructor(private choosePlayerService: ChoosePlayerService) {
  }



  @ViewChild(PotionCardComponent) potionCard!: PotionCardComponent
  @ViewChild(WeaponCardComponent) weaponCard!: WeaponCardComponent
  @ViewChild(ArmorCardComponent) armorCard!: ArmorCardComponent


  ngOnInit(): void {

  }
  refreshFromInventory() {
    if (this.player.listePotions) {
      let arr: any[] = this.player.listePotions;
      for (let el of arr) {
        let url = "assets/equipement/potions" + el.iconUrl + ".png"
        let objet={
          id:0,
          url:"",
          
        };
        objet.id=el.potionId;
        objet.url = url;

        this.listImagesPotions.push(objet);
        this.listPotionsExist = true;
      }
    }
    else this.listPotionsExist = false;
  }
  equipElement(Object:string){

    
  }
  openOptionEquip(el:object){

  }


}