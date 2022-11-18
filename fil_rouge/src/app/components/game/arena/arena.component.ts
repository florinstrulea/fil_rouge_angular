import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArenaService } from 'src/app/services/arena/arena.service';
import { JournalService } from 'src/app/services/arena/journal.service';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { ModalArenaComponent } from './modal-arena/modal-arena/modal-arena.component';
import { ModalapotionComponent } from './modal-arena/modalapotion/modalapotion.component';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css'],
})
export class ArenaComponent implements OnInit {
  playerImage: string =
    'assets/choose-player/' + sessionStorage.getItem('photoHeroUrl');
  monsterImage: string = '';
  player: any = {};
  monster: any = {};

  sub: Subscription = new Subscription();
  subPercentage: Subscription = new Subscription();

  hpPlayerBefore: number = 0;
  hpMonsterBefore: number = 0;

  hpPlayerAfter: number = 0;
  hpMonsterAfter: number = 0;

  damageReceivedByPlayer: number = 0;
  damageReceivedByMonster: number = 0;

  playerPercentage: number = 100;
  monsterPercentage: number = 100;

  @ViewChild(ModalArenaComponent) modal!: ModalArenaComponent;
  @ViewChild(ModalapotionComponent) modalPotion!: ModalapotionComponent;

  @ViewChild('journal') journal!: ElementRef;

  constructor(
    private arenaService: ArenaService,
    private journalService: JournalService,
    private router: Router,
    private choosePlayerService: ChoosePlayerService,
    private renderer?: Renderer2
  ) {}

  ngOnInit(): void {
    this.sub = this.journalService.battleDTOObservable$.subscribe((res) => {
      this.player = res.playerDTO;
      this.monster = res.monsterDTO;
    });

    this.subPercentage = this.journalService.lifePercentage.subscribe(
      (res) => (this.playerPercentage = res)
    );

    this.arenaService.getWariors().subscribe((res) => {
      sessionStorage.setItem('playerLifePoints', res.playerDTO.hp);
      sessionStorage.setItem('monsterLifePoints', res.monsterDTO.hp);
      console.log(res);
      this.monsterImage = 'assets/arena/' + res.monsterDTO.name + '.png';
      this.player = res.playerDTO;
      this.monster = res.monsterDTO;
      // let value = Number(sessionStorage.getItem('playerFullLife'));
      if (
        Number(sessionStorage.getItem('playerLifePoints')) <
        Number(sessionStorage.getItem('playerFullLife'))
      ) {
        this.playerPercentage =
          (Number(sessionStorage.getItem('playerLifePoints')) * 100) /
          Number(sessionStorage.getItem('playerFullLife'));
      } else {
        sessionStorage.setItem('playerFullLife', res.playerDTO.hp);
      }

      sessionStorage.setItem('monsterFullLife', res.monsterDTO.hp);
    });
  }

  fight() {
    this.arenaService.attack().subscribe((res) => {
      this.journalService.setPlayerObservable$(res);
      this.calcDamageReceivedByPlayer(res);
      this.calcDamageReceivedByMonster(res);
      this.playerPercentage =
        (Number(sessionStorage.getItem('playerLifePoints')) * 100) /
        Number(sessionStorage.getItem('playerFullLife'));
      this.monsterPercentage =
        (Number(sessionStorage.getItem('monsterLifePoints')) * 100) /
        Number(sessionStorage.getItem('monsterFullLife'));
      this.createJournalText();
      console.log(res);

      if (!res.monsterDTO.alive) {
        this.modal.monsterIsAlive = false;
        this.modal.openModal();
      } else if (!res.playerDTO.alive) {
        this.modal.playerIsAlive = false;
        sessionStorage.setItem('playerFullLife', '0');
        this.playerPercentage = 100;
        this.modal.openModal();
      }
    });
  }

  createJournalText() {
    const paragraph1 = this.renderer?.createElement('p');
    const paragraph2 = this.renderer?.createElement('p');
    const div = this.renderer?.createElement('div');
    let condition: boolean = this.player.speed >= this.monster.speed;
    let firstAttackHtml = '';
    let secondAttackHtml = '';

    if (condition) {
      this.renderer?.setProperty(paragraph1, 'className', 'text-success');
      this.renderer?.setProperty(paragraph2, 'className', 'text-danger');

      firstAttackHtml = `${this.player.namePlayer.toUpperCase()} à attaqué en premier et à causé
       ${
         this.damageReceivedByMonster
       }  points de dégats à ${this.monster.name.toUpperCase()}. Il lui reste ${
        this.hpMonsterAfter
      } points de vie`;

      secondAttackHtml = `${this.monster.name.toUpperCase()} à attaqué ensuite et à causé
       ${
         this.damageReceivedByPlayer
       }  points de dégats à ${this.player.namePlayer.toUpperCase()}. Il lui reste ${
        this.hpPlayerAfter
      } points de vie`;
    } else {
      this.renderer?.setProperty(paragraph1, 'className', 'text-danger');
      this.renderer?.setProperty(paragraph2, 'className', 'text-success');

      firstAttackHtml = `${this.monster.name.toUpperCase()} à attaqué en premier et à causé
       ${
         this.damageReceivedByPlayer
       }  points de dégats à ${this.player.namePlayer.toUpperCase()}. Il lui reste ${
        this.hpPlayerAfter
      } points de vie`;

      secondAttackHtml = `${this.player.namePlayer.toUpperCase()} à attaqué ensuite et à causé
       ${
         this.damageReceivedByMonster
       }  points de dégats à ${this.monster.name.toUpperCase()}. Il lui reste ${
        this.hpMonsterAfter
      } points de vie`;
    }

    this.renderer?.setProperty(paragraph1, 'textContent', firstAttackHtml);
    this.renderer?.setProperty(paragraph2, 'textContent', secondAttackHtml);
    this.renderer?.setProperty(
      div,
      'className',
      ' my-2 bg-light border-bottom border-secondary rounded'
    );
    this.renderer?.appendChild(div, paragraph1);
    this.renderer?.appendChild(div, paragraph2);
    this.renderer?.appendChild(this.journal.nativeElement, div);
    return div;
  }

  runBack() {
    this.arenaService.runEscape().subscribe((res) => console.log(res));
    this.router.navigateByUrl('/game/main-page');
    sessionStorage.setItem('monsterFullLife', '100');
  }

  calcDamageReceivedByPlayer(res: any) {
    this.hpPlayerBefore = parseInt(sessionStorage.getItem('playerLifePoints')!);
    this.hpPlayerAfter = res.playerDTO.hp;
    sessionStorage.setItem('playerLifePoints', res.playerDTO.hp);
    this.damageReceivedByPlayer = this.hpPlayerBefore - this.hpPlayerAfter;
  }
  calcDamageReceivedByMonster(res: any) {
    this.hpMonsterBefore = parseInt(
      sessionStorage.getItem('monsterLifePoints')!
    );
    this.hpMonsterAfter = res.monsterDTO.hp;
    sessionStorage.setItem('monsterLifePoints', res.monsterDTO.hp);
    this.damageReceivedByMonster = this.hpMonsterBefore - this.hpMonsterAfter;
  }

  openModalConsumePotion() {
    this.modalPotion.openModal();
  }
}
