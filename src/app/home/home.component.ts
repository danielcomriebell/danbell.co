import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myDate:Date;
  private projects: Entry<any>[] = [];
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    document.getElementsByTagName('html')[0].classList.remove('a-html');
    document.getElementsByTagName('body')[0].classList.remove('a-body');
    this.contentfulService.getProjects().then(projects => this.projects = projects);
  }

  utcTime():void{
    setInterval(() => {
    this.myDate = new Date();
    console.log(this.myDate);
  }, 1000);
  }


}
