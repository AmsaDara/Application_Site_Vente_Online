import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { IArticle } from './articles.model';



@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.css'],
})
export class ArticlesContainerComponent {
  
  isArticleFormShowed:boolean=false;
  articles:IArticle[]=[];
  
  constructor(private articleService:ArticleService) {
    this.articleService.getAllArticles().subscribe(
      {
        next:(data)=>{
          this.articles = [...data]
        },
        error:()=>{
          alert(JSON.stringify(Error,undefined,3))
        },
        complete:()=>{
          console.log('completed');
        }
      }
    )
  }
  
  hideForm(e:any){
   this.isArticleFormShowed = !this.isArticleFormShowed
  }
  
  showArticleForm(){
   this.isArticleFormShowed = !this.isArticleFormShowed
  }
  
  
  addArticle(article:IArticle){
   // this.articleService.addArticle(article);
  }
  
  suppArticle(article:IArticle){
   // this.articleService.removeArticle(article);
  }
  
}
