import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  userUrl: string = 'http://localhost:8080/register';
  constructor(private http: HttpClient) {}

  register(user: User): Observable<string> {
    return this.http.post<string>(this.userUrl, user);
  }
}
