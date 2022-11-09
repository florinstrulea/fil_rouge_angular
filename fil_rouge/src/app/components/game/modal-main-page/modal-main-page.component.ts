import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChoosePlayerService } from 'src/app/services/choose-player/choose-player.service';
import { MainPageService } from 'src/app/services/main-page/main-page.service';

@Component({
  selector: 'app-modal-main-page',
  templateUrl: './modal-main-page.component.html',
  styleUrls: ['./modal-main-page.component.css']
})
export class ModalMainPageComponent implements OnInit {

  @ViewChild("modal") modal!: ElementRef
  @ViewChild('overlay') overlay!: ElementRef
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef

  houseName: string = "";
  elements = new Array();
  player: any = {}

  constructor(private mainPageService: MainPageService, private choosePlayerService: ChoosePlayerService) { }

  ngOnInit(): void {
    this.mainPageService.buyElement('Weapon', 1, 93);

  }

  openModal() {
    this.modal.nativeElement.classList.remove("hidden");
    this.overlay.nativeElement.classList.remove("hidden");
    this.mainPageService.getElements(this.houseName).subscribe((res => {
      this.elements = res;
      console.log(res);
    }))

  }

  closeModal() {
    this.modal.nativeElement.classList.add("hidden");
    this.overlay.nativeElement.classList.add("hidden");

  }

  buyElement(element: string, idElement: number, idPlayer: number) {
    this.mainPageService.buyElement(element, idElement, idPlayer).subscribe(res => {

      console.log(res.error)
      this.choosePlayerService.getBattleDTO().subscribe(res => this.player = res.playerDTO)
    })
  }

}
