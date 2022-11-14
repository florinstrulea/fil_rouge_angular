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
      description:"La warrior est une guerrière redoutable qui ne craint pas le danger, elle souhaite préparer un avenir sans danger",
      name:"Guerriere",
    },
    {
      id: 2,
      link: "/Warrior_Male_equiped.png",
      description:"Le warrior est un guerrier renommé, il aime chasser les monstres qui rôdent autour de la cité",
      name:"Guerrier",
    },
    {
      id: 7,
      link: "/Archer_Female.png",
      description:"Manieuse orpaire à l'arc, elle décoche son arc de façon magistrale er rate rarement sa cible",
      name:"Archerette",
    },
    {
      id: 8,
      link: "/Archer_Male.png",
      description:"Archer solitaire, c'est un adversaire impassible mais toujours prêt à en découdre avec les monstres de la contrée",
      name:"Archer",
    },


  ];
  constructor() { }

  ngOnInit(): void {
  }

  getHeroId(number: string) {
    this.heroId = number;
    console.log("heroId",this.heroId);
  }


}
