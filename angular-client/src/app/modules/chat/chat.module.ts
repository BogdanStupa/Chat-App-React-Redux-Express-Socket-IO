import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class ChatModule { }
