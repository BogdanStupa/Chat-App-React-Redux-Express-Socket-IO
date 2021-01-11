import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { compareValidator } from 'src/app/shared/containers/auth-form-container/directives/compare-validator.directive';
import { AuthOption } from 'src/app/shared/containers/auth-form-container/interfaces/auh-form-container.interface';
import { constants } from "../../../core/constants";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {

  title="Sign Up";
  redirect = {
    redirectLabelText: "Have an account ?",
    redirectLinkText:"Sign In",
    redirectPath: "/signin"
  };
  options: AuthOption[] = [
    {
      placeholder: "Username",
      type: "text",
      formControlSettings: {
        formControlName: "username",
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

  constructor() {}

  ngOnInit(): void { }

  submitCallback(){

  }

}
