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
import { catchError, tap } from 'rxjs/operators';




@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _authenticationService: AuthenticationService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 401){
          this._authenticationService.logout();
          location.reload();
        }
        return throwError("Something bad happened; please try again later.");
      })
    );
  }
}
