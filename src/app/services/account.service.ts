import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable()
export class AccountService {

  constructor() { }

  signIn(account: Account): Account {
    account = new Account;
    account.email = "positive@reaction"
    account.name = "David"
    account.token = "qiwhdkueboqweileo"

    return account;
  }
}
