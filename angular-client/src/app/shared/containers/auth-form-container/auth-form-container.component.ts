import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthOption, FormControls } from './interfaces/auh-form-container.interface';
import { ReqAuthUser } from "../../../core/interfaces/user-auth.interface";
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
 

@Component({
  selector: 'app-auth-form-container',
  templateUrl: './auth-form-container.component.html',
  styleUrls: ['./auth-form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormContainerComponent implements OnInit {
  @Input() title: string;

  @Input() options: AuthOption[];

  @Output() submitCallback: EventEmitter<ReqAuthUser> = new EventEmitter();
  onSubmit(){ this.submitCallback.emit(this.authForm.value); }

  authForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    let formControls: FormControls<FormControl> = {};
    this.options.forEach(option => {
      const optionValidators: ValidatorFn[] = [];
      option.formControlSettings.validators.forEach(v => optionValidators.push(v.validator));
      formControls[option.formControlSettings.formControlName] = new FormControl("", optionValidators);
    });
    this.authForm = new FormGroup(formControls);
  }

}
