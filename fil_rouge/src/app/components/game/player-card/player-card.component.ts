import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { PlayerCardService } from 'src/app/services/player-card/player-card.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent implements OnInit {
  choosePlayerSub = new Subscription();
  player: any;
  /*Img assets*/
  playerImg: string =
    '../../../../assets/choose-player' + sessionStorage.getItem('photoHeroUrl');
  armorEquipedImg: string = 'assets/player-card/no-armor.png';
  weaponEquipedImg: string = 'assets/player-card/no-weapon.png';

  moneyImg: string = '../../../../assets/player-card/money.png';
  hpImg: string = '../../../../assets/player-card/hp.png';
  experienceImg: string = '../../../../assets/player-card/xp.png';
  levelImg: string =
    '../../../../assets/player-card/level-' + 1 + '.png'; /*on l'initialise*/

  weaponName: string = '';
  armorName?: string = '';

  /*Observables*/
  armorEquiped$: any;
  weaponEquiped$: any;

  constructor(
    private choosePlayerService: ChoosePlayerService,
    private playerCardService: PlayerCardService
  ) {}

  ngOnInit(): void {
    this.choosePlayerService.getBattleDTO().subscribe((res) => {
      this.refreshPlayer(res.playerDTO);
    });

    this.choosePlayerSub = this.playerCardService.playerObservable$.subscribe(
      (res) => {
        this.refreshPlayer(res);
      }
    );
  }
  refreshPlayer(res: any) {
    res;
    this.player = res;
    this.levelImg = 'assets/player-card/level-' + res.level + '.png';
    if (this.player.id) {
      this.levelImg = this.player.level
        ? 'assets/player-card/level-' + this.player.level + '.png'
        : '1';

      /*On récupère l'ArmorEquiped si idPlayer!=null*/
      if (this.player.idArmorEquiped) {
        this.playerCardService
          .getCurrentArmor(this.player?.id!)
          .subscribe((res) => {
            this.armorName = res.name != null ? res.name : 'No Armor Equiped';
            this.armorEquipedImg = res.iconUrl
              ? 'assets/equipement/armors' + res.iconUrl + '.png'
              : 'assets/player-card/no-armor.png';
          });
      }
      /*On récupère la WeaponEquiped si idPlayer!=null*/
      if (this.player.idWeaponEquiped) {
        this.playerCardService
          .getCurrentWeapon(this.player.id)
          .subscribe((res) => {
            this.weaponName = res.name ? res.name : 'No Weapon Equiped';
            this.weaponEquipedImg = res.iconUrl
              ? 'assets/equipement/weapons' + res.iconUrl + '.png'
              : 'assets/player-card/no-weapon.png';
          });
      }
    }
  }
}
