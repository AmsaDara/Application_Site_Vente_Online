import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { IArticle } from '../articles-container/articles-container.component';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements AfterViewInit {
  @Input()articles: IArticle[]=[];

  constructor() {
  }

  ngAfterViewInit(): void {
   
  }
  
  editArticle(article:IArticle){
    console.log('Edit Article');
    
  }
  
  suppArticle(article:IArticle){
    console.log('Supp Article');
    
  }
  
}
