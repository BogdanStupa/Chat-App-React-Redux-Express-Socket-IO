import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { constants } from '../../constants';
import { ReqAuthUser } from '../../interfaces/user-auth.interface';
import { BASE_API_URL } from '../api-url/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http: HttpClient,
    @Inject(BASE_API_URL) private _api: string
  ) { }

  register(user: ReqAuthUser): Observable<boolean> {
    return this._http.post(`${this._api}${constants.API.ACTIONS.AUTH_SIGNUP}`, user)
      .pipe(
          mapTo(true),
      )
  }
}
