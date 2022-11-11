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
  constructor(private http: HttpClient) { }

  getWariors(): Observable<any> {
    return this.http.post<any>(this.arenaUrl, '', { withCredentials: true });
  }
  attack(): Observable<any> {
    return this.http.post<any>(this.fightUrl, '', { withCredentials: true })
  }
}
