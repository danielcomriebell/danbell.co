import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  blurEvent:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  blurEventAction(){
    this.blurEvent = true;
  }

}
