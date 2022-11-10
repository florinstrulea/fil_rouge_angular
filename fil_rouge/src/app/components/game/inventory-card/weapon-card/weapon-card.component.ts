import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.css']
})
export class WeaponCardComponent implements OnInit {
  player: any = {};

  constructor() { }

  ngOnInit(): void {
    console.log("dans weapon");
    console.log(this.player.id);
  }
  refreshFromWeapon(){
    console.log("Dans Potion dans refresh");
    
    console.log(this.player.id);
  }

}
