import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { ArmorCardComponent } from './armor-card/armor-card.component';
import { ModalaEquiperComponent } from './modal-equiper/modala-equiper/modala-equiper.component';
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
  listWeaponsExist: boolean = false;
  listArmorsExist: boolean = false;
  listImagesPotions = new Array();
  listImagesWeapons = new Array();
  listImagesArmors = new Array();

  constructor(private choosePlayerService: ChoosePlayerService) {
  }


  @ViewChild(PotionCardComponent) potionCard!: PotionCardComponent
  @ViewChild(WeaponCardComponent) weaponCard!: WeaponCardComponent
  @ViewChild(ArmorCardComponent) armorCard!: ArmorCardComponent
  @ViewChild(ModalaEquiperComponent) modalComp!: ModalaEquiperComponent


  ngOnInit(): void {
    // this.choosePlayerService.getBattleDTO().subscribe(res => this.player = res.playerDTO)
  }
  open(value: string, obj: {}) {
    this.modalComp.openModal();
    this.modalComp.element = obj;
    this.modalComp.type = value;
  }

  refreshFromInventory() {


    // this.populatePotions();
    // this.populateArmors();
    // this.populateWeapons();
  }
  equipElement(Object: string) {


  }
  openOptionEquip(el: object) {

  }

  populatePotions() {
    if (this.player.listePotions) {
      let arr: any[] = this.player.listePotions;
      for (let el of arr) {
        let url = "assets/equipement/potions" + el.iconUrl + ".png"
        let objet = {
          id: 0,
          url: "",

        };
        objet.id = el.potionId;
        objet.url = url;

        this.listImagesPotions.push(objet);
        this.listPotionsExist = true;
      }
    }
    else this.listPotionsExist = false;
  }

  populateWeapons() {
    if (this.player.listePotions) {
      let arr: any[] = this.player.listePotions;
      for (let el of arr) {
        let url = "assets/equipement/weapons" + el.iconUrl + ".png"
        let objet = {
          id: 0,
          url: "",

        };
        objet.id = el.weaponId;
        objet.url = url;

        this.listImagesWeapons.push(objet);
        this.listWeaponsExist = true;
      }
    }
    else this.listWeaponsExist = false;
  }
  populateArmors() {
    if (this.player.listeArmors) {
      let arr: any[] = this.player.listeArmors;
      for (let el of arr) {
        let url = "assets/equipement/armors" + el.iconUrl + ".png"
        let objet = {
          id: 0,
          url: "",

        };
        objet.id = el.armorId;
        objet.url = url;

        this.listImagesArmors.push(objet);
        this.listArmorsExist = true;
      }
    }
    else this.listArmorsExist = false;
  }


}