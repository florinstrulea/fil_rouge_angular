import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArenaService {
  arenaUrl = environment.apiUrl + "arena/start";
  fightUrl = environment.apiUrl + "arena/fight";
  runUrl = environment.apiUrl + "arena/escape";
  killMonsterUrl = environment.apiUrl + "arena/killMonster"
  constructor(private http: HttpClient) { }

  getWariors(): Observable<any> {
    return this.http.post<any>(this.arenaUrl, '', { withCredentials: true });
  }
  attack(): Observable<any> {
    return this.http.post<any>(this.fightUrl, '', { withCredentials: true })
  }

  runEscape(): Observable<any> {
    return this.http.get<any>(this.runUrl, { withCredentials: true })
  }

  killMonster(): Observable<any> {
    return this.http.get<any>(this.killMonsterUrl, { withCredentials: true })
  }
}
