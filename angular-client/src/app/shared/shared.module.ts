import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthFormContainerComponent } from './containers/auth-form-container/auth-form-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompareValidatorDirective } from './containers/auth-form-container/directives/compare-validator.directive';



@NgModule({
  declarations: [
    InputComponent,
    IconComponent,
    AuthContainerComponent,
    AuthFormContainerComponent,
    CompareValidatorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports:[
    IconComponent,
    InputComponent,
    AuthContainerComponent,
    AuthFormContainerComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
