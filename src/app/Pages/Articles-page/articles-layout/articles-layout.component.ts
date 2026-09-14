import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/article.model';
import { ARTICLES } from '../../../core/data/articles';


@Component({

  selector: 'app-articles-layout',

  templateUrl: './articles-layout.component.html',

  styleUrls: ['./articles-layout.component.css'],

  standalone: false

})

export class ArticlesLayoutComponent implements OnInit {


  // ==============================
  // ALL ARTICLES
  // ==============================

  allArticles: Article[] = ARTICLES;



  // ==============================
  // DISPLAY ARTICLES
  // ==============================

  articles: Article[] = [];



  // ==============================
  // PAGINATION
  // ==============================

  currentPage = 1;

  pageSize = 9;

  totalPages = 0;

  pageNumbers:number[] = [];



  ngOnInit(): void {

    this.loadArticles();

  }



  // ==============================
  // LOAD ARTICLES
  // ==============================

  loadArticles(): void {


    const startIndex =
      (this.currentPage - 1) * this.pageSize;


    const endIndex =
      startIndex + this.pageSize;



    this.articles =
      this.allArticles.slice(
        startIndex,
        endIndex
      );



    this.totalPages =
      Math.ceil(
        this.allArticles.length /
        this.pageSize
      );



    this.pageNumbers =
      Array.from(
        {
          length:this.totalPages
        },
        (_,i)=>i+1
      );

  }



  // ==============================
  // PAGINATION
  // ==============================

  goToPage(page:number):void {


    if(
      page < 1 ||
      page > this.totalPages
    ){
      return;
    }


    this.currentPage = page;

    this.loadArticles();


    window.scrollTo({

      top:0,

      behavior:'smooth'

    });

  }



  nextPage():void{

    this.goToPage(
      this.currentPage + 1
    );

  }



  previousPage():void{

    this.goToPage(
      this.currentPage - 1
    );

  }



}
