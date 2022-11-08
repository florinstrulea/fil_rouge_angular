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
  heroId?: string;
  listPhotos = [
    {
      id: 1,
      link: "/Warrior_F_equiped.png",
    },
    {
      id: 2,
      link: "/Warrior_Male_equiped.png",
    },
    {
      id: 7,
      link: "/Archer_Female.png",
    },
    {
      id: 8,
      link: "/Archer_Male.png",
    },


  ];
  constructor() { }

  ngOnInit(): void {
  }

  getHeroId(event: Event) {
    this.heroId = (event.target as HTMLElement).getAttribute("data-id")!;
    console.log(this.heroId);
  }


}
