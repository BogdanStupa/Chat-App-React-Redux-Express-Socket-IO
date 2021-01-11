import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';


export function compareValidator(controlNameToCompare: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null =>  {
    if(!c.value || !c.value.length ){
      return null;
    }
    const controlToCompare = c.root.get(controlNameToCompare);
    
    if(controlToCompare){
      const subscption: Subscription = controlToCompare.valueChanges.subscribe(() => {
          c.updateValueAndValidity();
          subscption.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value != c.value ? { "compare": true } : null;
  }
}

@Directive({
  selector: '[appCompareValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CompareValidatorDirective,
    multi: true
  }]
})
export class CompareValidatorDirective  implements Validator{
  @Input("compare") controlNameToCompare: string;

  validate(c: AbstractControl): {[key: string]: any} | null{
    return compareValidator(this.controlNameToCompare)(c);
  }
}
