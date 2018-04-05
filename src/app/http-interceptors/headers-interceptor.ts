import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authReq = req.clone({ setHeaders: {
      ContentType:   'application/json; charset=utf-8',
      Accept:        'application/json'
    }});

    return next.handle(authReq);
  }
}
