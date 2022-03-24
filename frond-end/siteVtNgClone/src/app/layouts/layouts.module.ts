import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ArticlesModule } from '../articles/articles.module';



@NgModule({
  declarations: [
    HomePageComponent,
    ArticlesPageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ArticlesModule
  ],
  exports: [
    HomePageComponent,
    ArticlesPageComponent,
    AboutPageComponent,
    ContactPageComponent
  ]
})
export class LayoutsModule { }
