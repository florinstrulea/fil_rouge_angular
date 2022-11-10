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
  /*Img assets*/
  playerImg: string = "../../../../assets/choose-player" + sessionStorage.getItem("photoHeroUrl");
  armorEquipedImg : string="";
  weaponEquipedImg : string="";
  moneyImg:string="../../../../assets/player-card/money.png";
  hpImg:string="../../../../assets/player-card/hp.png";
  experienceImg:string="../../../../assets/player-card/xp.png";
  levelImg:string="../../../../assets/player-card/level-"+1+".png";/*on l'initialise*/

  weaponName :string="";
  armorName? :string="";
  constructor(private choosePlayerService: ChoosePlayerService, private playerCardSerice : PlayerCardService) {
  }

  ngOnInit(): void {

    this.armorEquipedImg = this.curPlayer?.idArmorEquiped == null? "../../../../assets/player-card/no-armor.png": "";

    this.choosePlayerSub = this.choosePlayerService.getBattleDTO().subscribe(res => {
      let imgWeaponIfFound="";
      this.curPlayer = res.playerDTO;
      this.levelImg = "assets/player-card/level-"+this.curPlayer?.level+".png";
              /*On récupère l'ArmorEquiped si idPlayer!=null*/
              if(!this.curPlayer?.id !==null){  
                if(this.curPlayer?.idArmorEquiped!=null){
                  this.playerSubscribtion = this.playerCardSerice.getCurrentArmor((this.curPlayer?.id!) ).subscribe(res=>{
                    this.armorName = res.name!=null? res.name: "No Armor Equiped";                   
                  })
                }else{
                  this.armorName = "No Armor Equiped";
                }          
              }
          
              /*On récupère la WeaponEquiped si idPlayer!=null*/
              if(!this.curPlayer?.id !==null){            
                
                if(this.curPlayer?.idWeaponEquiped){
                  console.log("je cherche la weapon.2");
                  this.playerSubscribtion = this.playerCardSerice.getCurrentWeapon((this.curPlayer?.id!) ).subscribe(res=>{
                    this.weaponName = res.name!=null? res.name: "No Weapon Equiped";  
                    if(res.id==this.curPlayer?.idWeaponEquiped){                    

                      this.weaponEquipedImg = "assets/equipement/weapons" + res.iconUrl+".png";
                     
                    }
                                
                  })
                }else{
                  this.weaponName = "No Weapon Equiped";
                  this.weaponEquipedImg = "/assets/player-card/no-weapon.png";
                  console.log(this.weaponEquipedImg);
                  
                }
          
              }
              
         
    })
    /*On récupère la Weapon et l'Armor du player*/ 


    
  }
  ngAfterInitView(){

  }

}
