import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: SignInComponent
      }
    ]),
    SharedModule,
  ],
})
export class SignInModule { }
