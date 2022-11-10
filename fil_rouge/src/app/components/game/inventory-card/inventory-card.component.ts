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
  @Input() player: any = {};

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
    this.choosePlayerService.getBattleDTO().subscribe(res => {
      this.player = res.playerDTO;
    })

  }

}
