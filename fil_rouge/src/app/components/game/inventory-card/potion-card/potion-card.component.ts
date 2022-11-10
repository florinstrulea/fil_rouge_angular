import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-potion-card',
  templateUrl: './potion-card.component.html',
  styleUrls: ['./potion-card.component.css']
})
export class PotionCardComponent implements OnInit {
  @Input() player: any = {}

  constructor() { }

  ngOnInit(): void {
    console.log("Dans Potion");
    console.log(this.player.id);


  }

  ngAfterViewInit() {
    console.log('after view');



  }

}
