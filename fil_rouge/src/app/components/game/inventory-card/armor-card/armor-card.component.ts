import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armor-card',
  templateUrl: './armor-card.component.html',
  styleUrls: ['./armor-card.component.css']
})
export class ArmorCardComponent implements OnInit {
  player: any = {};
  constructor() { }

  ngOnInit(): void {
    this.player
  }
  refreshFromArmor(){
    console.log("Dans Armor dans refresh");
    
    console.log(this.player.id);
  }

}
