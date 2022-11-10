import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potion-card',
  templateUrl: './potion-card.component.html',
  styleUrls: ['./potion-card.component.css']
})
export class PotionCardComponent implements OnInit {
  player: any = {};
  constructor() { }

  ngOnInit(): void {
    
  }
  refreshFromPotion(){
    console.log("Dans Potion dans refresh");    
    console.log(this.player.id);
  }


}
