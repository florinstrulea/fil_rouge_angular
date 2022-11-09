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
  curPlayer?: Partial<Player>;
  playerImg: string = "../../../../assets/choose-player" + sessionStorage.getItem("photoHeroUrl");
  weaponEquiped : string="";
  weaponName :string="";
  armorEquiped : string="";
  armorName? :string="";
  constructor(private choosePlayerService: ChoosePlayerService, private playerCardSerice : PlayerCardService) {
  }

  ngOnInit(): void {
    this.weaponEquiped = this.curPlayer?.idWeaponEquiped == null? "../../../../assets/player-card/no-weapon.png": "";
    this.armorEquiped = this.curPlayer?.idArmorEquiped == null? "../../../../assets/player-card/no-armor.png": "";

    this.choosePlayerSub = this.choosePlayerService.getBattleDTO().subscribe(res => {
      console.log("main-page .choosePlayerService.getBattleDTO()",res);
      this.curPlayer = res.playerDTO;
      console.log("varFlo : " + this.curPlayer?.id);

          /*On récupère l'ArmorEquiped si idPlayer!=null*/
    // if(this.curPlayer?.id!=null){
      console.log("this.curPlayer?.id!",this.curPlayer?.id! );
      
      this.playerSubscribtion = this.playerCardSerice.getCurrentArmor((this.curPlayer?.id!) ).subscribe(res=>{
        this.armorName = res.name;
        console.log("ArmorName",res.name);
        this.armorName = res.name;
        
      })
    // }
      
    })




  }

}
