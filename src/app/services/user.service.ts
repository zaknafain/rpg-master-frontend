import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from './base.service';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  currentUser: User;

  loadCurrentUser(): Observable<User> {
    return this.http.get('users/me').pipe(
      map(user => {
        this.currentUser = user as User;

        return user;
      }),
      catchError(this.handleError('UserService users/me'))
    ) as Observable<User>;
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`users/${user.id}`, { user: user }).pipe(
      map(() => {
        this.currentUser = user;

        return user;
      }),
      catchError(this.handleError('UserService users/:id'))
    ) as Observable<User>;
  }
}
