import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-player',
  templateUrl: './choose-player.component.html',
  styleUrls: ['./choose-player.component.css']
})
export class ChoosePlayerComponent implements OnInit {
  warriorFemale: string = "../../../../assets/choose-player/Warrior_F_equiped.png"
  warriorMale: string = "../../../../assets/choose-player/Warrior_Male_equiped.png"
  archerFemale: string = "../../../../assets/choose-player/Archer_Female.png"
  archerMale: string = "../../../../assets/choose-player/Archer_Male.png"

  constructor() { }

  ngOnInit(): void {
  }

}
