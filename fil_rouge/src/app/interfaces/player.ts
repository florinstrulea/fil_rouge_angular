import { Armor } from "./armor";
import { Potion } from "./potion";
import { Weapon } from "./weapon";

export interface Player {

	 id: string;
	 namePlayer: string;
	 nameHero: string;
	 hp: number;
	 hpMax: number;
	 strength: number;
	 defense: number;
	 speed: number;
	 money: number;
	 experience: number;
	 critical: number;
	 dodge: number;
	 level: number;
	 race: string;
	 gender: string;
	 alive :boolean;
	 listArmor : Array<Armor>;
	 listWeapon : Array<Weapon>;
	 listePotions : Array<Potion>;
	 idWeaponEquiped : number;    
	 idArmorEquiped : number;    
}
