import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectI } from './interfaces/auth-container.interface';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthContainerComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  redirect: RedirectI;

  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void {}

  redirectTo():void {
    this._route.navigateByUrl(this.redirect.redirectPath);
  }
}
