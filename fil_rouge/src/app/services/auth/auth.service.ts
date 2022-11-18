import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';

import { Status } from 'src/app/interfaces/status';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/app/interfaces/user-login';
import { AuthStatus } from 'src/app/interfaces/auth-status';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private curUser = new BehaviorSubject<AuthStatus>({
    connected: false,
  });

  curUserObservable = this.curUser.asObservable();

  userUrl: string = environment.apiUrl + 'register';
  loginUrl: string = environment.apiUrl + 'login';
  logoutUrl: string = environment.apiUrl + 'logout';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User | Status> {
    return this.http.post<User | Status>(this.userUrl, user);
  }

  getUser(): Observable<User | Status> {
    return this.http.get<User | Status>(this.loginUrl, {
      withCredentials: true,
    });
  }
  logout(): Observable<Status> {
    return this.http.get<Status>(this.logoutUrl, { withCredentials: true });
  }
  setAuthStatus(auth: AuthStatus) {
    this.curUser.next(auth);
  }
  getCurrentUser(): AuthStatus {
    return this.curUser.value;
  }
  isUser(obj: any): obj is User {
    return 'userName' in obj;
  }
  isStatus(obj: any): obj is Status {
    return 'response' in obj;
  }
  isConnected(): boolean {
    return this.curUser.value.connected;
  }

  login(user: UserLogin): Observable<any> {
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.password);
    return this.http.post<any>(this.loginUrl, formData, {
      withCredentials: true,
    });
  }
}
