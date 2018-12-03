import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';

import { environment } from '../../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinner.show();
    // Get the auth header from the service.
    const token = localStorage.getItem('token');
    const url = req.url.indexOf(environment.apiUrl) > -1 ?
      req.url :
      environment.apiUrl + req.url + '';

    if (!token) {
      const apiReq = req.clone({
        url: url,
        // setHeaders: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
        withCredentials: true
      });
      return this.handleRequest(next, apiReq);

    } else {
      // Get the auth header from the service.
      const authHeader = 'Bearer ' + token;
      // Clone the request to add the new header.
      const authReq = req.clone({
          setHeaders: {
            'Authorization': authHeader,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          withCredentials: true,
          url: url
      });
      // Pass on the cloned request instead of the original request.
      return this.handleRequest(next, authReq);
    }
  }

  handleRequest(next, req) {
    return next.handle(req)
            .pipe(
              tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  this.spinner.hide();
                }
              }, (err: any) => {
                console.log(err);
                this.notifier.notify('error', err.error.msg);
                this.spinner.hide();
              })
            )
  }
}
