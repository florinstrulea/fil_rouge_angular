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
  curPlayer?: Partial<Player>;

  constructor(private choosePlayerService: ChoosePlayerService) {
  }

  ngOnInit(): void {
    this.sub = this.choosePlayerService
      .adversariesObservable$
      .subscribe((elmt) => {
        console.log("monPlayer", elmt);
        this.curPlayer = elmt.playerDTO;

      })
    //this.choosePlayerService.adversaries.value.playerDTO = this.curPlayer;
  }

}
