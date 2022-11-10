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
  refresh:boolean=false;

  constructor(private mainPageService: MainPageService, private choosePlayerService: ChoosePlayerService) { }

  ngOnInit(): void {

  }

  openModal() {
    this.modal.nativeElement.classList.remove("hidden");
    this.overlay.nativeElement.classList.remove("hidden");
    this.elements = new Array();
    this.mainPageService.getElements(this.houseName).subscribe((res => {
      this.elements = res;
      console.log(res);
    }))

  }

  closeModal():boolean {
    this.modal.nativeElement.classList.add("hidden");
    this.overlay.nativeElement.classList.add("hidden");
    this.choosePlayerService.getBattleDTO().subscribe(res=> {
      console.log(res);
      this.player = res.playerDTO})
    this.refresh=true;
    return true;
  }

  buyElement(element: string, idElement: number, idPlayer: number) {
    if (this.checkEnoughMoney(element, idElement)) {
      this.mainPageService.buyElement(element, idElement, idPlayer).subscribe(res => {
        console.log(res)
        this.choosePlayerService.getBattleDTO().subscribe(res => this.player = res.playerDTO)
        this.buySuccesful(element, idElement);
      })
    } else alert('Montant inssufisant');

  }

  buySuccesful(element: string, idElement: number) {
    let value = element.toLowerCase() + "Id";
    let valueString = '';
    for (let myElement of this.elements) {
      if (myElement[value] == idElement) {
        valueString = myElement.name
        alert(`Vous avez bien achété l'element avec le nom: ${valueString}`)
      }
    }
  }

  checkEnoughMoney(element: string, idElement: number): boolean {
    let result: boolean = false;
    let value = element.toLowerCase() + "Id";
    for (let myElement of this.elements) {
      if (myElement[value] == idElement) {
        if (myElement.price <= this.player.money) result = true;
        else result = false;
      }
    }
    return result;
  }


}
