import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentivationGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authenticationService.currentUserValue && 
      this._authenticationService.currentUserValue.token ? true : this._router.parseUrl("/signin");
  }

}
