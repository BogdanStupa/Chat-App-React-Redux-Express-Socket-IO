import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: SignUpComponent
      }
    ]),
    ReactiveFormsModule,
    SharedModule,
  ],
  exports:[SignUpComponent]
})
export class SignUpModule { }
