import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { ModalMainPageComponent } from '../modal-main-page/modal-main-page.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  /*TODO : pour la partie inventaire du bas : chargé la photo du player qui a été choisit dans choose-player  + son nom*/

  houseName: string = '';

  constructor(private choosePlayerService: ChoosePlayerService) { }

  ngOnInit(): void {
    this.choosePlayerService.getBattleDTO().subscribe(res => {
      console.log(res);
      this.modal.player = res.playerDTO;

    })

  }
  @ViewChild(ModalMainPageComponent) modal!: ModalMainPageComponent



  close() {
    this.modal.closeModal();
  }

  open(value: string) {
    this.modal.houseName = value;
    this.modal.openModal();
  }




}



