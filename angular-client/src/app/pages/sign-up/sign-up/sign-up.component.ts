import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EMPTY, of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

import { ToastrService } from 'ngx-toastr';

import { ReqAuthUser } from 'src/app/core/interfaces/user-auth.interface';
import { RegisterService } from 'src/app/core/services/register/register.service';

import { compareValidator } from 'src/app/shared/containers/auth-form-container/directives/compare-validator.directive';
import { AuthOption } from 'src/app/shared/containers/auth-form-container/interfaces/auh-form-container.interface';
import { constants } from "../../../core/constants";
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  title="Sign Up";
  redirect = {
    redirectLabelText: "Have an account ?",
    redirectLinkText:"Sign In",
    redirectPath: "/signin"
  };
  error: string;
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
    {
      placeholder: "Confirm password",
      type: "password",
      formControlSettings: {
        formControlName: "confirmPassword",
        validators: [
          {
            validator: Validators.required,
            error: "required",
            errorMessage: constants.LABELS.AUTH.PASSWORD_REQUIRED
          },
          {
            validator: compareValidator("password"),
            error: "compare",
            errorMessage: constants.LABELS.AUTH.PASSWORD_DOESNT_MATCH
          }
        ],
      },
    }
  ];

  constructor(
    private _authenticationService: AuthenticationService,
    private _registerService: RegisterService,
    private _router: Router,
    private _toastServise: ToastrService
  ) {
    if(this._authenticationService.currentUserValue){
      this._router.navigateByUrl("");
    }
  }

  ngOnInit(): void { }

  submitCallback(value: ReqAuthUser & { confirmPassword: string }){
    const user: ReqAuthUser  = { 
      nickname: value.nickname,
      password: value.password 
    }
    this._registerService.register(user)
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
          this._router.navigateByUrl("/signin");
        }else{
          this._toastServise.error("", "Something went wrong, please try again", {
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