import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthOption, FormControls } from './interfaces/auh-form-container.interface';
import { UserAuthI } from "../../../core/interfaces/user-auth.interface";
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
 

@Component({
  selector: 'app-auth-form-container',
  templateUrl: './auth-form-container.component.html',
  styleUrls: ['./auth-form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormContainerComponent implements OnInit {

  @Input() options: AuthOption[];

  @Output() submitCallback: EventEmitter<UserAuthI> = new EventEmitter();

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

  submit(event: Event){

  }

}
