import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SplashComponent } from './splash/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContentfulService } from './contentful.service';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    MenuComponent,
    SplashComponent,
    ProjectsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      // {path: 'contact', component: ContactComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'home/:id', component: ProjectsDetailComponent},

      // {path: 'splash', component: SplashComponent},
      {path: '', redirectTo:'projects', pathMatch:'full'},
    ])
  ],
  providers: [ContentfulService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
