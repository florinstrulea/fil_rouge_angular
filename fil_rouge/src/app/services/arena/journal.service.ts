import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  public battleDTO = new BehaviorSubject({
    playerDTO: {},
    monsterDTO: {},
  });

  public lifePercentage = new BehaviorSubject<number>(100);

  battleDTOObservable$ = this.battleDTO.asObservable();
  percentage$ = this.lifePercentage.asObservable();

  getPlayerObservable$() {
    return this.battleDTO.value;
  }
  setPlayerObservable$(player: any) {
    this.battleDTO.next(player);
  }
  getPercentageObservable$() {
    return this.lifePercentage.value;
  }
  setPercentageObservable$(percentage: number) {
    this.lifePercentage.next(percentage);
  }

  constructor() {}
}
