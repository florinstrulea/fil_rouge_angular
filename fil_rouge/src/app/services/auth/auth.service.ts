import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/interfaces/status';
import { User } from 'src/app/interfaces/user';
import { UserLogged } from 'src/app/interfaces/user-logged';
import { UserLogin } from 'src/app/interfaces/user-login';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  userUrl: string = 'http://localhost:8080/register';
  loginUrl: string = 'http://localhost:8080/login';
  // private curUser = new BehaviorSubject<AuthStatus>({
  //   connected: false,
  // });

  // curUserObservable = this.curUser.asObservable();

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  login(user: FormData): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }

  isUser(obj: any): obj is User {
    return 'username' in obj;
  }
  isStatus(obj: any): obj is Status {
    return 'response' in obj;
  }
  // isConnected(): boolean {
  //   return this.curUser.value.connected;
  // }
}
