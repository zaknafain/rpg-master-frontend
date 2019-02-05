import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from './base.service';

class JwtToken {
  jwt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService implements OnInit {
  private _changed = new Subject();
  jwtToken: string = localStorage.getItem("jwt");
  redirectUrl: string = '';
  changed = this._changed.asObservable();

  ngOnInit() {
    this.updateToken(localStorage.getItem("jwt"));
  }

  signIn(email: string, password: string): Observable<string> {
    return this.http.post('user_token', { auth: { email: email, password: password } }).pipe(
      map((token: JwtToken) => {
        this.updateToken(token.jwt);

        return token.jwt;
      }),
      catchError(this.handleResponseError('AuthService', 'user_token', undefined))
    );
  }

  isLoggedIn(): boolean {
    return !!this.jwtToken;
  }

  signOut(): void {
    this.updateToken('');
  }

  private updateToken(token: string) {
    this.jwtToken = token;
    if (!!token) {
      localStorage.setItem("jwt", token);
    } else {
      this.redirectUrl = '';
      localStorage.clear();
    }

    this._changed.next(this.jwtToken);
  }
}
