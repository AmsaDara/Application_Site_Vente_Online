import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { IArticle } from '../articles-container/articles-container.component';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements AfterViewInit {
  @Input()dataSource: IArticle[]=[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'description', 'photo', 'taille', 'nbreArticle', 'prix', 'actions'];

  constructor() {
    
  }

  ngAfterViewInit(): void {
   
  }
}
