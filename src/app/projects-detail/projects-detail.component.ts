import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {


  productID:string;
  projects: Entry<any>[] = [];

  constructor(private route:ActivatedRoute, private contentfulService: ContentfulService) {
    this.route.params.subscribe(params => this.productID = params['id']);
    this.contentfulService.getProjects().then( projects => {
      // this.projects = projects;
      // console.log(projects);

      projects.forEach((project) => {
        if(project.sys.id === this.productID){
          // this.projects = project;
          this.projects.push(project);
        }
      })
    });
    this.getProductDetail(this.productID, this.projects);

  }

  getProductDetail(productId, array){
    console.log(productId);
    // projects.forEach()
    // this.projects.forEach((ele) =>{
    //   console.log(ele);
    // })

    console.log(array);
  }

  showMe(){
    console.log(this.projects);
  }

  ngOnInit() {
    // console.log(this.projects);
  }

}
