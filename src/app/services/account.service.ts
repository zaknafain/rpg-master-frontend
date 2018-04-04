import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable()
export class AccountService {

  constructor() { }

  signIn(account: Account): Observable<Account> {
    account = new Account;
    account.email = "positive@reaction"
    account.name = "David"
    account.token = "qiwhdkueboqweileo"

    return Observable.of(account);
  }
}
