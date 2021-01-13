import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EMPTY, of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { constants }  from 'src/app/core/constants';
import { ReqAuthUser } from 'src/app/core/interfaces/user-auth.interface';
import { AuthOption } from 'src/app/shared/containers/auth-form-container/interfaces/auh-form-container.interface';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  title = "Sign In";
  redirect = {
    redirectLabelText: "Don't have an account ?",
    redirectLinkText:"Sign Up",
    redirectPath: "/signup"
  };
  options: AuthOption[] = [
    {
      placeholder: "Nickname",
      type: "text",
      formControlSettings: {
        formControlName: "nickname",
        validators: [
          {
            validator: Validators.required,
            error: "required",
            errorMessage: constants.LABELS.AUTH.NICKNAME_REQUIRED
          },
          {
            validator: Validators.maxLength(12),
            error: "maxlength",
            errorMessage: constants.LABELS.AUTH.NICKNAME_MAX_LENGHT
          },
          {
            validator:  Validators.minLength(5),
            error: "minlength",
            errorMessage: constants.LABELS.AUTH.NICKNAME_MIN_LENGHT
          },    
        ]
      }
     },
    {
      placeholder: "Password",
      type: "password",
      formControlSettings: {
        formControlName: "password",
        validators: [
          {
            validator: Validators.required,
            error: "required",
            errorMessage: constants.LABELS.AUTH.PASSWORD_REQUIRED
          },
          {
            validator: Validators.maxLength(12),
            error: "maxlength",
            errorMessage: constants.LABELS.AUTH.PASSWORD_MAX_LENGHT
          },
          {
            validator:  Validators.minLength(5),
            error: "minlength",
            errorMessage: constants.LABELS.AUTH.PASSWORD_MIN_LENGHT
          },          
        ] 
      },
    },
  ];


  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _toastServise: ToastrService
  ) { 
    if(this._authenticationService.currentUserValue){
      this._router.navigateByUrl("");
    }
  }

  ngOnInit(): void {}

  submitCallback(user: ReqAuthUser){
    this._authenticationService.login(user)
      .pipe(
        takeUntil(this._destroy$),
        catchError(err => {
          if(err instanceof HttpErrorResponse){
            this._toastServise.error("",err.error, {
              positionClass: "toast-top-center"
            });
            return EMPTY;    
          }
          return of(false);
        })
      ).subscribe(isOk => {
        if(isOk){
          this._router.navigateByUrl("");
        }else{
          this._toastServise.error("Error", "Something went wrong, please try again", {
            timeOut: 3000,
            positionClass: "toast-top-center"
          });
        }
      });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
  
}
