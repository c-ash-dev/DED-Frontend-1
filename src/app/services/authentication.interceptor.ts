import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

          const copiedReq = request.clone({
              withCredentials: true
          });
      
          return next.handle(copiedReq );
      }
}