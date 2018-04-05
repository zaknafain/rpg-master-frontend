import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, tap } from 'rxjs/operators';

import { BaseService } from './base.service';

import { User } from '../models/user';

@Injectable()
export class UserService extends BaseService {

  loadCurrentUser(): Observable<User> {
    return this.http.get('users/me').pipe(
      tap(user => user),
      catchError(this.handleResponseError('UserService', 'users/me', undefined))
    );
  }
}
