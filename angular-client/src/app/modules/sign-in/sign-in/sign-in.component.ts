import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { constants }  from 'src/app/core/constants';
import { AuthOption } from 'src/app/shared/containers/auth-form-container/interfaces/auh-form-container.interface';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  title="Sign In";
  redirect = {
    redirectLabelText: "Don't have an account ?",
    redirectLinkText:"Sign Up",
    redirectPath: "/signup"
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
  ];

  constructor() { }

  ngOnInit(): void {}

  submitCallback(){
    console.log("Submit");
  }
  
}
