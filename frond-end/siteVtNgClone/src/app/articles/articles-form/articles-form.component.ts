import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css']
})
export class ArticlesFormComponent implements OnInit {
  public articleForm;
  @Output() onArticleSave:EventEmitter<any>= new EventEmitter<any>()
  
  constructor(private fb:FormBuilder, private articleService:ArticleService) {
      this.articleForm=fb.group({
        title:[''],
        description:[''],
        photo:[''],
        taille:[''],
        nbreArticle:[],
        prix:[],
        
        
      })
    
     }

  ngOnInit(): void {
  }
  
  // addArticleEvent(){
  //   this.onAddArticle.next('onAddArticle')
  // }
  
  saveArticle(){
    this.articleService.addArticle(this.articleForm.value)
    this.onArticleSave.emit('Ok')
    
  }

}
