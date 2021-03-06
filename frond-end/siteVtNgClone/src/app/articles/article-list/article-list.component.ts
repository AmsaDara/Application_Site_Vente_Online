import {
  Component,
  EventEmitter,
  OnInit,
  AfterContentInit,
  Input,
  Output,
  OnChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles?: IArticle[]
  isFormVisible = false
  articleToUpdate?:IArticle
  context : 'ADD' |'UPDATE' = 'ADD'

  constructor(private articleService: ArticleService) {
    
  }

  ngOnInit(){
    this.articleService.getAllArticles().subscribe(data=>this.articles=data)
  }
  
  showArticleFormForAdd(){
    this.isFormVisible = true,
    this.context='ADD'
  }
  
  onSavedArticle(){
    this.isFormVisible=false
    this.articleService.getAllArticles().subscribe(data=>this.articles=data)
  }
  

  showArticleFormForUpdate(article: IArticle) {
    this.isFormVisible=true
    this.articleToUpdate={... article}
    this.context='UPDATE'
  }

  suppArticle(article: IArticle) {
    this.articleService.removeArticle(article).subscribe(console.log)
    this.articleService.getAllArticles().subscribe(data=>this.articles=data)
  }
}
