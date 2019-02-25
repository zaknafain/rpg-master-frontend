import { HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from '../../testing/async-observable-helpers';

import { User } from '../models/user';
import { UserService } from './user.service';

describe ('UserService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let errorServiceSpy: { get: jasmine.Spy };
  let userService: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    errorServiceSpy = jasmine.createSpyObj('ErrorHandlingService', ['get']);
    userService = new UserService(<any> httpClientSpy, <any> errorServiceSpy);
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const expectedHeroes: User[] =
      [{
        id: 1,
        name: 'A',
        email: 'a@mail.de',
        admin: false,
        locale: 'de',
        createdAt: '2019-1-1',
        updatedAt: '2019-1-1',
      }, {
        id: 2,
        name: 'B',
        email: 'b@mail.de',
        admin: false,
        locale: 'de',
        createdAt: '2019-1-1',
        updatedAt: '2019-1-1',
      }];

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    userService.loadCurrentUser().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    userService.loadCurrentUser().subscribe(
      heroes => fail('expected an error, not heroes'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

});
