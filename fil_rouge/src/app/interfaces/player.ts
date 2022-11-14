import { Armor } from "./armor";
import { Potion } from "./potion";
import { Weapon } from "./weapon";

export interface Player {

	alive :boolean;
	critical: number;
	defense: number;
	dodge: number;
	experience: number;
	gender: string;
	hp: number;
	hpMax: number;
	id: string;
	idArmorEquiped? : number;    
	idWeaponEquiped? : number;    
	level: number;
	listArmor? : Array<Armor>;
	listWeapon? : Array<Weapon>;
	listePotions? : Array<Potion>;
	money: number;
	nameHero: string;
	namePlayer: string;
	race: string;
	speed: number;
	strength: number;

}
