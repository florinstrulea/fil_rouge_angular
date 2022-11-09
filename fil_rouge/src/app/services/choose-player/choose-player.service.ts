import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChosenPlayer } from 'src/app/interfaces/chosen-player';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChoosePlayerService {
  choosePlayerUrl: string = environment.apiUrl + "choose-player";


  public adversaries = new BehaviorSubject({
    monsterDTO: {},
    playerDTO: {},
    photo: {id:0, link:""},
    set setMonster(obj: any) {
      this.monsterDTO = obj;
    },
    set setPlayer(obj: any) {
      this.playerDTO = obj;
    }

  })

  adversariesObservable$ = this.adversaries.asObservable();
  constructor(private http: HttpClient) { }

  choosePlayer(player: ChosenPlayer): Observable<any> {
    return this.http.post(this.choosePlayerUrl, player, { withCredentials: true })
  }

  getBattleDTO(): Observable<any> {
    return this.http.get(this.choosePlayerUrl, { withCredentials: true })
  }

}
