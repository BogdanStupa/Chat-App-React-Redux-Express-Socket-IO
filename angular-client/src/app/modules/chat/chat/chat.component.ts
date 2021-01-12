import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { constants } from 'src/app/core/constants';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService
  ) {
    console.log("CHAT CONSTRUCTOR", constants);
  }

  ngOnInit(): void {
    console.log("CHAT ON INIT");
  }

  onLogout(){
    this.authenticationService.logout().subscribe(x => console.log(x));
  }

}
