export interface Article {

  id: number;

  title: string;

  slug: string;

  category:
    | 'travel-guide'
    | 'destination'
    | 'family'
    | 'luxury'
    | 'honeymoon'
    | 'nile-cruise'
    | 'tips';


  seoTitle: string;

  metaDescription: string;


  coverImage: string;


  excerpt: string;


  content: {

    heading: string;

    paragraphs?: string[];

    points?: string[];

  }[];


  relatedLinks?: string[];

}
