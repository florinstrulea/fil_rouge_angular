import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  @Input()
  houseName: string = "";
  allWeapons = new Array();


  constructor(private mainPageService: MainPageService) { }

  ngOnInit(): void {

  }

  openModal() {
    this.modal.nativeElement.classList.remove("hidden");
    this.overlay.nativeElement.classList.remove("hidden");
    this.mainPageService.getElements(this.houseName).subscribe((res => {
      this.allWeapons = res;
      console.log(res);
    }))

  }

  closeModal() {
    this.modal.nativeElement.classList.add("hidden");
    this.overlay.nativeElement.classList.add("hidden");

  }

}
