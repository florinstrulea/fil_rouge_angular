import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { PlayerCardService } from 'src/app/services/player-card/player-card.service';

@Component({
  selector: 'app-modala-equiper',
  templateUrl: './modala-equiper.component.html',
  styleUrls: ['./modala-equiper.component.css']
})
export class ModalaEquiperComponent implements OnInit {
  element: any = {};
  player: any = {};
  type: string = '';
  constructor(private choosePlayerService: ChoosePlayerService, private playerCardService: PlayerCardService) { }

  ngOnInit(): void {

  }
  @ViewChild("modal") modal!: ElementRef
  @ViewChild('overlay') overlay!: ElementRef
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef

  openModal() {
    this.modal.nativeElement.classList.remove("hidden");
    this.overlay.nativeElement.classList.remove("hidden");
    this.choosePlayerService.getBattleDTO().subscribe(res => this.player = res.playerDTO);

  }

  closeModal() {
    this.modal.nativeElement.classList.add("hidden");
    this.overlay.nativeElement.classList.add("hidden");

  }

  equipElement(value: string, idElement: number) {
    this.playerCardService.equipElement(value, idElement, this.player.id);
  }

  consumatePotion(value: string, idElement: number) {
    this.playerCardService.consumeElement(value, idElement, this.player.id);
  }






}
