import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        const token = localStorage.getItem('token');
        const url = req.url.indexOf(environment.apiUrl) > -1 ?
            req.url :
            environment.apiUrl + req.url + '';

        if (!token) {
            const apiReq = req.clone({ url: url });
            return next.handle(apiReq);

        } else {
            // Get the auth header from the service.
            const authHeader = 'Bearer ' + token;
            // Clone the request to add the new header.
            const authReq = req.clone({
                setHeaders: { 'Authorization': authHeader },
                url: url
            });
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        }
    }
}
