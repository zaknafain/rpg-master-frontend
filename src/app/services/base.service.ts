import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { ErrorHandlingService, HandleError } from './error-handling.service';

@Injectable()
export class BaseService {
  protected serviceName: string;
  protected handleError: HandleError;

  constructor(
    protected http: HttpClient,
    private errorService: ErrorHandlingService
  ) {  }

  protected handleResponseError(serviceName, methodName, object = undefined) {
    this.handleError = this.errorService.createHandleError(serviceName);

    return this.handleError(methodName, object);
  }
}
