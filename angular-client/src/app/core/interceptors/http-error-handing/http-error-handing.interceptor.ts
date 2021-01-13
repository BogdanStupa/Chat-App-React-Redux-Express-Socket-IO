import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../../authentication/authentication.service';
import { catchError, switchMap } from 'rxjs/operators';



@Injectable()
export class HttpErrorHandingInterceptor implements HttpInterceptor {
  private readonly errorMessage = "Something bad happened; please try again later.";

  constructor(
    private _authenticationService: AuthenticationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addToken(request);
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 401:
            return this._authenticationService.refreshToken().pipe(switchMap(() => next.handle(this.addToken(request)))); 

          case 403:
            this._authenticationService.logout();
            location.reload();
            break;
          
          default:
            const error = err.error || this.errorMessage;
            return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    const currentUser = this._authenticationService.currentUserValue;
    if(currentUser && currentUser.token){
        return request.clone({
          setHeaders: {
            Authorization: currentUser.token
          }
        });
    }
    return request;
  }
}
