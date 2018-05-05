import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from './base.service';

import { User } from '../models/user';

@Injectable()
export class UserService extends BaseService {
  currentUser: User;

  loadCurrentUser(): Observable<User> {
    return this.http.get('users/me').pipe(
      map(user => {
        this.currentUser = user as User;

        return user;
      }),
      catchError(this.handleResponseError('UserService', 'users/me', undefined))
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`users/${user.id}`, { user: user }).pipe(
      map(() => {
        this.currentUser = user;

        return user;
      }),
      catchError(this.handleResponseError('UserService', 'users/:id', undefined))
    );
  }
}
