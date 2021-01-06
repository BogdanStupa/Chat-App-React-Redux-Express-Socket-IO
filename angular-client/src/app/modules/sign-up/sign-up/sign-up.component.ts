import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {

  constructor() {
    console.log("SIGN UP CONSTRUCTOR");
  }

  ngOnInit(): void {
    console.log("SIGN UP ON INIT");
  }

}
