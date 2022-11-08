import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChosenPlayer } from 'src/app/interfaces/chosen-player';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {
  sub : Subscription = new Subscription();
  curPlayer?:ChosenPlayer;


  constructor(private choosePlayerService : ChoosePlayerService) {
    // this.sub = this.choosePlayerService.adversariesObservable$.subscribe((player)=>{
    //   this.curPlayer=player;
    // })
   }

  ngOnInit(): void {
  }

}
