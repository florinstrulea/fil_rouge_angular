import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/player';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerCardService {
  getPlayerUrl : string = environment.apiUrl + "inventory/showAll";
  getArmorUrl : string = environment.apiUrl + "inventory/currentArmor";
  getWeaponUrl : string = environment.apiUrl + "inventory/currentWeapon";
  

  public currentPlayer = new BehaviorSubject({
    alive:true,
    critical:0,
    defense:0,
    dodge:0,
    experience:0,
    gender:"",
    hp:0,
    hpMax:0,
    id:0,
    idArmorEquiped:0,
    idWeaponEquiped:0,
    level:0,
    listArmor:{},
    listWeapon:{},
    listPotions:{},
    money:0,
    nameHero:"",
    namePlayer:"",
    race:"",
    speed:0,
    strength:0
       
  })
public currentWeapon = new BehaviorSubject({
  weaponId:0,
  type:0,
  damage:0,
  level:0,
  price:0,
  criticalHit:0,
  iconUrl:"",
  name:""
});
public currentArmor = new BehaviorSubject({
  armorId:0,
  name:"",
  iconUrl:"",
  type:0,
  protection:0,
  dodgeRate:0,
  level:0,
  price:0,
  category:"",
});
playerObservable$ = this.currentPlayer.asObservable();
weaponObservable$ = this.currentWeapon.asObservable();
armorObservable$ = this.currentArmor.asObservable();

  constructor(private http: HttpClient) { }

  getCurrentPlayer(idPlayer: number): Observable<Partial<Player>> {
    return this.http.post<Partial<Player>>(this.getPlayerUrl, idPlayer, { withCredentials: true })
  }
  getCurrentArmor(idPlayer : number) : Observable<any>{
    return this.http.post(this.getArmorUrl, idPlayer, { withCredentials: true })
  }
}
