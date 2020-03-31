import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string, password: string) {

    localStorage.setItem('access_token', username + ' ' + password);

    return this.httpClient.post<{user: User}>('/users/authenticate', {username, password})
      .pipe(tap(res => {
          localStorage.setItem('access_token', res.user.username);
        }
      ), catchError(resr => of('')));
  }

  handleError() {
    localStorage.setItem('access_token', 'nope');
  }
  
  logout() {
    localStorage.removeItem('access_token');
  }

  isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
  }
}
