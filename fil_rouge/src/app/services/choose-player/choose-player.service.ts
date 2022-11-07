import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChosenPlayer } from 'src/app/interfaces/chosen-player';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChoosePlayerService {
  choosePlayerUrl: string = environment.apiUrl + "choose-player";

  public adversaries = new BehaviorSubject({
    monster: {},
    player: {},
    set setMonster(obj: any) {
      this.monster = obj;
    },
    set setPlayer(obj: any) {
      this.player = obj;
    }
  })

  adversariesObservable$ = this.adversaries.asObservable();
  constructor(private http: HttpClient) { }

  choosePlayer(player: ChosenPlayer): Observable<any> {
    return this.http.post(this.choosePlayerUrl, player, { withCredentials: true })
  }
}
