import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountStoreService {
  private _account: BehaviorSubject<User> = new BehaviorSubject(new User);
  public readonly account: Observable<User> = this._account.asObservable();

  constructor() {
    this._account.next(undefined);
  }

  updateAccount(account: User): void {
    this._account.next(account);
  }
}
