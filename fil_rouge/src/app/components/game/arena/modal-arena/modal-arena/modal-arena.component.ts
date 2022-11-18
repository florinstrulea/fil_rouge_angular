import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ArenaService } from 'src/app/services/arena/arena.service';

@Component({
  selector: 'app-modal-arena',
  templateUrl: './modal-arena.component.html',
  styleUrls: ['./modal-arena.component.css'],
})
export class ModalArenaComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef;

  playerIsAlive = true;
  monsterIsAlive = true;

  youWin: string = 'assets/arena/youWin.jpg';
  gameOver: string = 'assets/arena/gameOver.png';

  constructor(private arenaService: ArenaService, private router: Router) {}

  ngOnInit(): void {}

  openModal() {
    this.modal.nativeElement.classList.remove('hidden');
    this.overlay.nativeElement.classList.remove('hidden');
  }

  closeModal() {
    this.modal.nativeElement.classList.add('hidden');
    this.overlay.nativeElement.classList.add('hidden');
    if (!this.monsterIsAlive) {
      this.router.navigateByUrl('/game/main-page');
      sessionStorage.removeItem('monsterLifePoints');
      sessionStorage.removeItem('playerLifePoints');
    } else if (!this.playerIsAlive) {
      this.arenaService.killPlayer().subscribe(() => {
        this.router.navigateByUrl('/game/choose-player');
        sessionStorage.setItem('playerChosen', 'false');
        sessionStorage.removeItem('photoHeroUrl');
        sessionStorage.removeItem('monsterLifePoints');
        sessionStorage.removeItem('playerLifePoints');
      });
    }
  }
}
