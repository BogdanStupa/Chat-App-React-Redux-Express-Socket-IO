import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  private _destroy$: Subject<boolean> = new  Subject<boolean>();

  title = "Sign In";
  redirect = {
    redirectLabelText: "Don't have an account ?",
    redirectLinkText:"Sign Up",
    redirectPath: "/signup"
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
  ];

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) { 
    if(this._authenticationService.currentUserValue){
      this._router.navigateByUrl("");
    }
  }

  ngOnInit(): void {}

  submitCallback(user: ReqAuthUser){
    this._authenticationService.login(user)
      .pipe(
        takeUntil(this._destroy$)
      ).subscribe(isOk => {
        if(isOk){
          this._router.navigateByUrl("");
        }else{
          this.error = "SOME STRANGE ERROR";
        }
      });
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
  
}
