import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-arena',
  templateUrl: './modal-arena.component.html',
  styleUrls: ['./modal-arena.component.css']
})
export class ModalArenaComponent implements OnInit {

  @ViewChild("modal") modal!: ElementRef
  @ViewChild('overlay') overlay!: ElementRef
  @ViewChild('btnCloseModal') btnCloseModal!: ElementRef

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modal.nativeElement.classList.remove("hidden");
    this.overlay.nativeElement.classList.remove("hidden");

  }

  closeModal() {
    this.modal.nativeElement.classList.add("hidden");
    this.overlay.nativeElement.classList.add("hidden");
    this.router.navigateByUrl('/game/main-page');


  }

}
