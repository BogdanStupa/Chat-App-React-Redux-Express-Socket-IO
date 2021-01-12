import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { mapTo, tap, map } from "rxjs/operators";

import { AuthenticatedUser, ReqAuthUser } from '../interfaces/user-auth.interface';
import { BASE_API_URL } from '../services/api-url/api-url.service';
import { BROWSER_STORAGE } from '../services/storage/storage.service';
import { constants } from "../constants";



@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  private readonly CURRENT_USER = "CURRENT_USER";
  private currentUserSubject: BehaviorSubject<AuthenticatedUser>;
  public currentUser$: Observable<AuthenticatedUser>;

  constructor(
    private _http: HttpClient,
    @Inject(BASE_API_URL) private _api: string,
    @Inject(BROWSER_STORAGE) private _storage: Storage
  ){
    this.currentUserSubject = new BehaviorSubject<AuthenticatedUser>(JSON.parse(this._storage.getItem(this.CURRENT_USER)));
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():AuthenticatedUser {
    return this.currentUserSubject.value;
  }

  public login(user: ReqAuthUser): Observable<boolean> {
    return this._http.post<AuthenticatedUser>(`${this._api}${constants.API.ACTIONS.AUTH_SIGNIN}`, user)
      .pipe(
        map((user: AuthenticatedUser) => this.doLoginUser(user)),
        mapTo(true)
      )
  }

  public logout(): Observable<boolean> {
    if(!this.currentUserValue){
      return of(true);
    }
    const token = this.currentUserValue.refreshToken.split(" ")[1];
    return this._http.delete(`${this._api}${constants.API.ACTIONS.AUTH_LOGOUT}/${this.currentUserValue.user._id}/${token}`)
      .pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true)
      );
  }


  private doLoginUser(user: AuthenticatedUser): AuthenticatedUser {
    this._storage.setItem(this.CURRENT_USER, JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }

  private doLogoutUser(): void {
    this._storage.removeItem(this.CURRENT_USER);
    this.currentUserSubject.next(null);
    location.reload();
  }
}
