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
    


    
  })
  playerObservable$ = this.currentPlayer.asObservable();


  constructor(private http: HttpClient) { }

  getCurrentPlayer(idPlayer: number): Observable<Partial<Player>> {
    return this.http.post<Partial<Player>>(this.getPlayerUrl, idPlayer, { withCredentials: true })
  }
}
