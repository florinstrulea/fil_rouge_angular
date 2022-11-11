import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { refCount, Subscription } from 'rxjs';
import { ArenaService } from 'src/app/services/arena/arena.service';
import { JournalService } from 'src/app/services/arena/journal.service';


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
  sub: Subscription = new Subscription();
  battleDTOBefore: any = {}



  @ViewChild("journal") journal!: ElementRef

  constructor(private arenaService: ArenaService, private journalService: JournalService, private router: Router, private renderer?: Renderer2) { }

  ngOnInit(): void {
    this.sub = this.journalService.battleDTOObservable$.subscribe(res => {
      this.player = res.playerDTO;
      this.monster = res.monsterDTO;

    })

    this.arenaService.getWariors().subscribe(res => {
      console.log(res)
      this.monsterImage = 'assets/arena/' + res.monsterDTO.name + '.png';
      this.player = res.playerDTO;
      this.monster = res.monsterDTO;
    });


  }

  fight() {
    this.arenaService.attack().subscribe(res => {
      this.journalService.setPlayerObservable$(res);
      this.createJournalText();
      console.log(res)
    });

  }

  createJournalText() {
    const paragraph = this.renderer?.createElement('p');
    this.renderer?.setProperty(paragraph, 'className', 'text-danger')
    this.renderer?.setProperty(paragraph, 'textContent', 'text-danger')
    this.renderer?.appendChild(this.journal.nativeElement, paragraph)
    return paragraph;
  }

  runBack() {
    this.arenaService.runEscape().subscribe(res => console.log(res));
    this.router.navigateByUrl("/game/main-page");


  }
}
