import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';

import { Article } from '../../../core/models/article.model';

import { ARTICLES } from '../../../core/data/articles';



@Component({

  selector: 'app-article-details',

  templateUrl: './article-details.component.html',

  styleUrls: ['./article-details.component.css'],

  standalone: false

})

export class ArticleDetailsComponent implements OnInit {



  // ============================
  // ARTICLE
  // ============================

  article?: Article;



  // ============================
  // RELATED ARTICLES
  // ============================

  relatedArticles: Article[] = [];



  // ============================
  // LOADING
  // ============================

  loading = false;



  // ============================
  // CONSTRUCTOR
  // ============================

  constructor(

    private route: ActivatedRoute,

    private titleService: Title,

    private metaService: Meta

  ) {}





  // ============================
  // INIT
  // ============================

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {


      const slug = params.get('slug');


      if (slug) {

        this.getArticleBySlug(slug);

      }


    });


  }





  // ============================
  // GET ARTICLE BY SLUG
  // ============================

  private getArticleBySlug(slug: string): void {


    this.loading = true;



    this.article = ARTICLES.find(article =>

      article.slug === slug

    );




    if (this.article) {


      this.setSeoData(this.article);


      this.loadRelatedArticles();


    }



    this.loading = false;


  }





  // ============================
  // RELATED ARTICLES
  // ============================

  private loadRelatedArticles(): void {


    if (!this.article) {

      return;

    }




    this.relatedArticles = ARTICLES

      .filter(article =>

        article.category === this.article?.category &&

        article.id !== this.article?.id

      )

      .slice(0, 3);



  }





  // ============================
  // SEO DATA
  // ============================

  private setSeoData(article: Article): void {



    // Browser Title

    this.titleService.setTitle(

      article.seoTitle

    );





    // Meta Description

    this.metaService.updateTag({

      name: 'description',

      content: article.metaDescription

    });





    // Open Graph Title

    this.metaService.updateTag({

      property: 'og:title',

      content: article.seoTitle

    });





    // Open Graph Description

    this.metaService.updateTag({

      property: 'og:description',

      content: article.metaDescription

    });





    // Open Graph Image

    this.metaService.updateTag({

      property: 'og:image',

      content: article.coverImage

    });





    // Open Graph Type

    this.metaService.updateTag({

      property: 'og:type',

      content: 'article'

    });



  }



}
