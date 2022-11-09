import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  getElements(houseName: string): Observable<any> {

    return this.http.get<any>(environment.apiUrl + 'shop/' + houseName, { withCredentials: true })
  }
}
