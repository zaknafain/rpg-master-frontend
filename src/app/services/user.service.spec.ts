import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

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

  it('should return expected user (HttpClient called once)', () => {
    const currentUser: User = {
      id: 1,
      name: 'A',
      email: 'a@mail.de',
      admin: false,
      locale: 'de',
      createdAt: '2019-1-1',
      updatedAt: '2019-1-1',
    };

    httpClientSpy.get.and.returnValue(asyncData(currentUser));

    userService.loadCurrentUser().subscribe(
      user => expect(user).toEqual(currentUser, 'expected user'),
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
      user => fail('expected an error, not user'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

});
