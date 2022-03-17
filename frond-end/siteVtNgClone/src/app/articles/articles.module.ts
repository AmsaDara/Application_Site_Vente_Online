import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesContainerComponent } from './articles-container/articles-container.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { MaterialModule } from '../shared/material/material.module';
import { ArticleTableComponent } from './article-table/article-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticlesContainerComponent,
    ArticleListComponent,
    ArticlesFormComponent,
    ArticleTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    ArticlesContainerComponent,
    ArticleListComponent,
    ArticlesFormComponent
  ]
})
export class ArticlesModule { }
