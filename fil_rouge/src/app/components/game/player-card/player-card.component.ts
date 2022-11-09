import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/interfaces/player';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  sub: Subscription = new Subscription();
  playerSubscribtion = new Subscription();
  curPlayer?: Partial<Player>;
  playerImg: string = "../../../../assets/choose-player" + sessionStorage.getItem("photoHeroUrl");
  weaponEquiped : string="";
  weaponName :string="";
  armorEquiped : string="";
  armorName :string="";
  constructor(private choosePlayerService: ChoosePlayerService) {
  }

  ngOnInit(): void {
    this.weaponEquiped = this.curPlayer?.idWeaponEquiped == null? "../../../../assets/player-card/no-weapon.png": "";
    this.armorEquiped = this.curPlayer?.idArmorEquiped == null? "../../../../assets/player-card/no-armor.png": "";


    this.sub = this.choosePlayerService.getBattleDTO().subscribe(res => {
      console.log("main-page .choosePlayerService.getBattleDTO()",res);
      this.curPlayer = res.playerDTO;
    })


  }

}
