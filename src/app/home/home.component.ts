import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeImages:Array<any> = [
    {
      "title":'../assets/amanda.png',
      "url":'contact'
    },
    {
      "title":'../assets/3.png',
      "url":'home'
    },
    {
      "title":'../assets/2.png',
      "url":'about'
    },
    {
      "title":'../assets/300ent.png',
      "url":'contact'
    },
    {
      "title":'../assets/capture.png',
      "url":'contact'
    },
    {
      "title":'../assets/rose.png',
      "url":'contact'
    },
    {
      "title":'../assets/1.png',
      "url":'rates'
    },
    {
      "title":'../assets/staple3.png',
      "url":'contact'
    },
    {
      "title":'../assets/angel.png',
      "url":'contact'
    },
    {
      "title":'../assets/fearofgod.png',
      "url":'contact'
    },
    {
      "title":'../assets/25.png',
      "url":'contact'
    },
    // {
    //   "title":'../assets/FCSFINAL.jpg',
    //   "url":'contact'
    // },
    // {
    //   "title":'../assets/db8.jpg',
    //   "url":'contact'
    // },
    {
      "title":'../assets/6.png',
      "url":'contact'
    },
    {
      "title":'../assets/blah1.JPG',
      "url":'contact'
    },
    {
      "title":'../assets/blah.JPG',
      "url":'contact'
    },
    {
      "title":'../assets/pollyaart.jpg',
      "url":'contact'
    },
    {
      "title":'../assets/4.jpg',
      "url":'contact'
    },
  ]

  constructor() { }

  ngOnInit() {
    // e.preventDefault();
    // console.log(document.getElementsByTagName('html')[0].classList.remove('a-html'));
    document.getElementsByTagName('html')[0].classList.remove('a-html');
    document.getElementsByTagName('body')[0].classList.remove('a-body');

  }

}
