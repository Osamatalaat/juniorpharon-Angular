import { Article } from '../models/article.model';

import { TRAVEL_ARTICLES } from './articles/travel';
import { DESTINATION_ARTICLES } from './articles/destinations';
import { EXPERIENCE_ARTICLES } from './articles/experiences';
import { GUIDE_ARTICLES } from './articles/guides';


export const ARTICLES: Article[] = [

  ...TRAVEL_ARTICLES,

  ...DESTINATION_ARTICLES,

  ...EXPERIENCE_ARTICLES,

  ...GUIDE_ARTICLES

];
