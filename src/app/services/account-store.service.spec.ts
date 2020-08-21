import { TestBed } from '@angular/core/testing';

import { AccountStoreService } from './account-store.service';

import { User } from '../models/user';

describe('AccountStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountStoreService = TestBed.inject(AccountStoreService);

    expect(service).toBeTruthy();
  });

  it('should return an undefined observable in the beginning', () => {
    const service: AccountStoreService = TestBed.inject(AccountStoreService);

    service.account.subscribe(
      account => expect(account).toBeUndefined(),
      fail
    );
  });

  it('should return the new account after updating', () => {
    const service: AccountStoreService = TestBed.inject(AccountStoreService);
    const user: User = {
      name: 'David',
      admin: false,
      createdAt: '2019-01-01',
      updatedAt: '2019-01-01'
    };

    service.updateAccount(user);
    service.account.subscribe(
      account => expect(account).toBe(user),
      fail
    );
  });
});
