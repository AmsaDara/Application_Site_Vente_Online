import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './layouts/about-page/about-page.component';
import { ArticlesPageComponent } from './layouts/articles-page/articles-page.component';
import { ContactPageComponent } from './layouts/contact-page/contact-page.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'articles',
    component:ArticlesPageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }