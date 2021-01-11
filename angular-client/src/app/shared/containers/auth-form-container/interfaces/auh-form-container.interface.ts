import { FormControl, FormGroup, ValidatorFn} from '@angular/forms';

interface ValidatorI {
  validator: ValidatorFn;
  error: string;
  errorMessage: string;
}

interface FormControlSettingsI {
  formControlName: string;
  validators: ValidatorI[]; 
}


export interface AuthOption {
  placeholder: string;
  formControlSettings: FormControlSettingsI; 
  type: string;
};


export type FormControls<T> = {[key: string]: T};

