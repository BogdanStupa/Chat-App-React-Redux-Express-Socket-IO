import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IconProperties } from 'src/app/shared/components/icon/icon.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  icon: IconProperties = {
    width: 40,
    type: 'message-text'
  }

  constructor() { }

  ngOnInit(): void {}
}
