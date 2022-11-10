import { Component, OnInit } from '@angular/core';
import { ArenaService } from 'src/app/services/arena/arena.service';


@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  playerImage: string = "assets/choose-player/" + sessionStorage.getItem('photoHeroUrl');
  monsterImage: string = '';
  //sessionStorage.getItem('photoHeroUrl')!;
  constructor(private arenaService: ArenaService) { }

  ngOnInit(): void {
    this.arenaService.getWariors().subscribe(res => {
      console.log(res)
      this.monsterImage = 'assets/arena/' + res.monsterDTO.name + '.png';
    });
  }

}
