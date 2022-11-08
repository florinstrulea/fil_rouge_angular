import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/player';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerCardService {
  getPlayerUrl : string = environment.apiUrl + "inventory/showAll";


  constructor(private http: HttpClient) { }

  getCurrentPlayer(idPlayer: number): Observable<Partial<Player>> {
    return this.http.post<Partial<Player>>(this.getPlayerUrl, idPlayer, { withCredentials: true })
  }
}
