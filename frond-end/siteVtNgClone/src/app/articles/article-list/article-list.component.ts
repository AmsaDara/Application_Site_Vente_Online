import { Component, EventEmitter, OnInit, AfterContentInit, Input, Output } from '@angular/core';
import { ArticleService } from '../article.service';
import { IArticle } from '../articles-container/articles.model';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() articles: IArticle[] = [];
  @Output() onSuppArticle : EventEmitter<IArticle> = new EventEmitter<IArticle>()
  
  constructor(private articleService:ArticleService) {
    
  }
  
  
  // ngOnInit(): void {
  //   this.articles=this.articleService.getAllArticles()
  // }
  
  editArticle(article:IArticle){
    this.articleService.updateArticle(article)
    
  }
  
  suppArticle(article:IArticle){
    this.onSuppArticle.next(article)
    
  }
  
}
