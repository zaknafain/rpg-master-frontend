import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

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
