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

  afterViewInit() {
    // this.potionCard.player = this.player;
    // this.weaponCard.player = this.player;
    // this.armorCard.player = this.player;
  }

  ngOnInit(): void {

  }
  refreshFromInventory() {
    if (this.player.listePotions) {
      let arr: any[] = this.player.listePotions;
      for (let el of arr) {
        let url = "assets/equipement/potions" + el.iconUrl + ".png"
        this.listImagesPotions.push(url);
        this.listPotionsExist = true;
      }
    }
    else this.listPotionsExist = false;

    console.log('dans inventory');
    console.log(this.player.id);
    // this.potionCard.player = this.player;
    // this.weaponCard.player = this.player;
    // this.armorCard.player = this.player;
    // this.potionCard.refreshFromPotion();
    // this.armorCard.refreshFromArmor();
    // this.weaponCard.refreshFromWeapon();
  }

}
