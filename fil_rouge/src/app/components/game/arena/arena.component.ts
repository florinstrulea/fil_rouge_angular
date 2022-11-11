import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { ArenaService } from 'src/app/services/arena/arena.service';


@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  playerImage: string = "assets/choose-player/" + sessionStorage.getItem('photoHeroUrl');
  monsterImage: string = '';
  player: any = {}
  monster: any = {}
  //sessionStorage.getItem('photoHeroUrl')!;
  constructor(private arenaService: ArenaService) { }

  ngOnInit(): void {
    this.arenaService.getWariors().subscribe(res => {
      console.log(res)
      this.monsterImage = 'assets/arena/' + res.monsterDTO.name + '.png';
      this.player = res.playerDTO;
      this.monster = res.monsterDTO;
    });
  }

  fight() {
    this.arenaService.attack().subscribe(res => console.log(res));
  }

}
