import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-main-page',
  templateUrl: './modal-main-page.component.html',
  styleUrls: ['./modal-main-page.component.css']
})
export class ModalMainPageComponent implements OnInit {

  @ViewChild("modal") modal!: ElementRef
  @ViewChild('overlay') overlay!: ElementRef
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    console.log(this.modal);

    this.modal.nativeElement.classList.remove("hidden");
    this.overlay.nativeElement.classList.remove("hidden");
    console.log('Florin');

  }

  closeModal() {
    this.modal.nativeElement.classList.add("hidden");
    this.overlay.nativeElement.classList.add("hidden");

  }

}
