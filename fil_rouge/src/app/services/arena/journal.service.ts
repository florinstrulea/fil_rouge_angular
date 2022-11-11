import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  public battleDTO = new BehaviorSubject({
    playerDTO: {},
    monsterDTO: {}
  })

  battleDTOObservable$ = this.battleDTO.asObservable();

  getPlayerObservable$() {
    return this.battleDTO.value;
  }
  setPlayerObservable$(player: any) {
    this.battleDTO.next(player);
  }

  constructor() { }
}
