import { Component, Input } from '@angular/core';
import { Article } from '../../../core/models/article.model';


@Component({

  selector: 'app-article-card',

  templateUrl: './article-card.component.html',

  styleUrls: ['./article-card.component.css'],

  standalone:false

})

export class ArticleCardComponent {


  // ============================
  // ARTICLE DATA
  // ============================

  @Input() article!: Article;


}
