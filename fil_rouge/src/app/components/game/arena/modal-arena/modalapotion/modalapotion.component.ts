import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArenaService } from 'src/app/services/arena/arena.service';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { PlayerCardService } from 'src/app/services/player-card/player-card.service';

@Component({
  selector: 'app-modalapotion',
  templateUrl: './modalapotion.component.html',
  styleUrls: ['./modalapotion.component.css']
})
export class ModalapotionComponent implements OnInit {
  @ViewChild("modal") modal!: ElementRef
  @ViewChild('overlay') overlay!: ElementRef
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef

  playerIsAlive = true;
  player : any = {}

  sub : Subscription = new Subscription();

  constructor(private choosePlayerService:ChoosePlayerService, private router: Router, private playerCardService:PlayerCardService) { }

  ngOnInit(): void {
    this.choosePlayerService
    .getBattleDTO()
    .subscribe((res) => (this.player = res.playerDTO));
  }

  openModal() {
    this.modal.nativeElement.classList.remove('hidden');
    this.overlay.nativeElement.classList.remove('hidden');
    this.modal.nativeElement.scrollIntoView(false);
    this.choosePlayerService
      .getBattleDTO()
      .subscribe((res) => {
        this.player = res.playerDTO
      });
  }

  closeModal() {
    this.modal.nativeElement.classList.add('hidden');
    this.overlay.nativeElement.classList.add('hidden');
  }
  
  consumatePotion(value: string, idElement: number) {
    this.playerCardService
      .consumeElement(value, idElement, this.player.id)
      .subscribe((res) => {
        this.playerCardService.setPlayerObservable$(res.playerDTO);
        this.player = res.playerDTO;
        console.log('Consume Potion res :');
        console.log(res);
      });

    // this.closeModal();
  }
  notInList(value: string, list: []): boolean {
    let elements2 = [];
    if (list != null) {
      elements2 = list.filter((el: any) => el.name == value);
      return elements2.length > 0 ? false : true;
    } else return true;
  }

}
