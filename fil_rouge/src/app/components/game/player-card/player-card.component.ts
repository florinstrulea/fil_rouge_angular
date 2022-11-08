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
  photoPlayerLink? :{id:number, link:string};
  playerImg :string ="";
  warriorMale: string = "../../../../assets/choose-player/Warrior_Male_equiped.png";
  weaponEquiped : string="";
  constructor(private choosePlayerService: ChoosePlayerService) {
  }

  ngOnInit(): void {
    this.sub = this.choosePlayerService
      .adversariesObservable$
      .subscribe((elmt) => {
        console.log("monPlayer", elmt);
        this.curPlayer = elmt.playerDTO;
        this.photoPlayerLink = elmt.photo;
        this.playerImg = "../../../../assets/choose-player"+elmt.photo.link;
        // console.log("this.photoPlayerLink",this.photoPlayerLink);       

      })
    //this.choosePlayerService.adversaries.value.playerDTO = this.curPlayer;
      // this.playerSubscribtion = this.playerCardService.playerObservable$

  }

}
