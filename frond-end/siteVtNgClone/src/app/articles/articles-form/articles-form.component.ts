import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArticle } from '../articles-container/articles-container.component';


@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css']
})
export class ArticlesFormComponent implements OnInit {
  public articleForm;
  @Output() onArticleSave:EventEmitter<IArticle>= new EventEmitter<IArticle>()
  
  constructor(private fb:FormBuilder) {
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
    console.log(this.articleForm.value);
    
    this.onArticleSave.emit(this.articleForm.value);
    
  }

}
