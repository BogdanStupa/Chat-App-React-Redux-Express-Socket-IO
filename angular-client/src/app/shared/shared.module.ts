import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './components/icon/icon.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    IconComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IconComponent
  ]
})
export class SharedModule { }
