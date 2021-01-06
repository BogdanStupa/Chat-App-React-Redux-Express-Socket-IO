import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';


type IconType = "message-text" | "search"; 

export interface IconProperties {
  type:IconType;
  width: number;
}



@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {

  @Input() icon: IconProperties;
  iconType: TemplateRef<any>;

  @ViewChild("messageTextIcon", { static: true }) private messageTextIcon: TemplateRef<any>; 
  @ViewChild("searchIcon", { static: true }) private searchIcon:TemplateRef<any>; 
  @ViewChild("defaultIcon", { static: true }) private  defaultIcon:TemplateRef<any>; 

  constructor() { }

  ngOnInit(): void {
    switch(this.icon?.type){
      case "message-text":
        this.iconType = this.messageTextIcon;
        break;
      case "search":
        this.iconType = this.searchIcon;
        break;
      default:
        this.iconType = this.defaultIcon;
    }
  }
}
