import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './chat/chat.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: ChatComponent
      }
    ]),
    SharedModule
  ],
})
export class ChatModule { }
