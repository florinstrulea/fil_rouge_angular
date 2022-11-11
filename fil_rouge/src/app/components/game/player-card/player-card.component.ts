import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/interfaces/player';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { PlayerCardService } from 'src/app/services/player-card/player-card.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  choosePlayerSub = new Subscription();
  playerSubscribtion = new Subscription();
  player: any;
  /*Img assets*/
  playerImg: string = "../../../../assets/choose-player" + sessionStorage.getItem("photoHeroUrl");
  armorEquipedImg: string = "";
  weaponEquipedImg: string = "";
  moneyImg: string = "../../../../assets/player-card/money.png";
  hpImg: string = "../../../../assets/player-card/hp.png";
  experienceImg: string = "../../../../assets/player-card/xp.png";
  levelImg: string = "../../../../assets/player-card/level-" + 1 + ".png";/*on l'initialise*/

  weaponName: string = "";
  armorName?: string = "";

  constructor(private choosePlayerService: ChoosePlayerService, private playerCardService: PlayerCardService) {
  }

  ngOnInit(): void {
    this.playerSubscribtion = this.playerCardService.playerObservable$.subscribe(res => this.player = res)
    this.armorEquipedImg = this.player?.idArmorEquiped == null ? "../../../../assets/player-card/no-armor.png" : "";

    this.choosePlayerSub = this.choosePlayerService.getBattleDTO().subscribe(res => {
      let imgWeaponIfFound = "";
      this.player = res.playerDTO;
      this.levelImg = "assets/player-card/level-" + this.player?.level + ".png";
      /*On récupère l'ArmorEquiped si idPlayer!=null*/
      if (!this.player?.id !== null) {
        if (this.player?.idArmorEquiped != null) {
          this.playerSubscribtion = this.playerCardService.getCurrentArmor((this.player?.id!)).subscribe(res => {
            this.armorName = res.name != null ? res.name : "No Armor Equiped";
          })
        } else {
          this.armorName = "No Armor Equiped";
        }
      }

      /*On récupère la WeaponEquiped si idPlayer!=null*/
      if (!this.player?.id !== null) {

        if (this.player?.idWeaponEquiped) {
          console.log("je cherche la weapon.2");
          this.player = this.playerCardService.getCurrentWeapon((this.player?.id!)).subscribe(res => {
            this.weaponName = res.name != null ? res.name : "No Weapon Equiped";
            if (res.id == this.player?.idWeaponEquiped) {

              this.weaponEquipedImg = "assets/equipement/weapons" + res.iconUrl + ".png";

            }

          })
        } else {
          this.weaponName = "No Weapon Equiped";
          this.weaponEquipedImg = "../../../../assets/player-card/no-weapon.png";
          console.log(this.weaponEquipedImg);

        }

      }


    })
    /*On récupère la Weapon et l'Armor du player*/



  }
  ngAfterInitView() {

  }

}
