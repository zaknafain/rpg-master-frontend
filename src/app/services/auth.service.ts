import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from './base.service';

class JwtToken {
  jwt: string;
}

@Injectable()
export class AuthService extends BaseService implements OnInit {
  jwtToken: string = localStorage.getItem("jwt");

  ngOnInit() {
    this.jwtToken = localStorage.getItem("jwt");
  }

  signIn(email: string, password: string): Observable<string> {
    return this.http.post('user_token', { auth: { email: email, password: password } }).pipe(
      map((jwtToken: JwtToken) => {
        this.saveToken(jwtToken.jwt);

        return jwtToken.jwt;
      }),
      catchError(this.handleResponseError('AuthService', 'user_token', undefined))
    );
  }

  private saveToken(token: string) {
    this.jwtToken = token;
    localStorage.setItem("jwt", token);
  }
}
