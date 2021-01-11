import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { constants } from 'src/app/core/constants';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

  constructor() {
    console.log("CHAT CONSTRUCTOR", constants);
  }

  ngOnInit(): void {
    console.log("CHAT ON INIT");
  }

}
