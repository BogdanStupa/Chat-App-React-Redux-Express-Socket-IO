import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

import { InputCSS } from "./interfaces/input";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  placeholder: string;

  @Input()
  error: string;

  @Input()
  styles: InputCSS;

  @Input()
  formControlName: string;

  constructor() { }

  ngOnInit(): void {}

}
