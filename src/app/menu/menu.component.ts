import { Component, OnInit } from '@angular/core';
import { animation } from '../animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[animation]
})
export class MenuComponent implements OnInit {

  state: string = 'small';
  openMenu:boolean=false;
  menuItems:Array<any> = [
    {
      "title":'home',
      "url":'home'
    },
    {
      "title":'VR',
      "url":'projects'
    },
  ]

  constructor() { }

  initSlide(){
    this.openMenu = !this.openMenu;
    this.state=(this.state === 'small' ? 'large' : 'small');
  }

  ngOnInit() {
  }

}
