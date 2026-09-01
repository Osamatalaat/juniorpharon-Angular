import {
  Component,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  TRIPS
} from '../../../core/data/trips';

import {
  Trip
} from '../../../core/models/trip.model';



interface CategoryHero {

  title:string;

  description:string;

  image:string;

}



@Component({
  selector:'app-trip-category-page',
  templateUrl:'./trip-category-page.component.html',
  styleUrls:[
    './trip-category-page.component.css'
  ],
  standalone:false
})
export class TripCategoryPageComponent
implements OnInit {



category = '';

title = '';

hero!: CategoryHero;



allTrips:Trip[] = [];

trips:Trip[] = [];




// Pagination

currentPage = 1;

pageSize = 8;

totalPages = 0;

previousPage(): void {

  if (this.currentPage > 1) {

    this.changePage(
      this.currentPage - 1
    );

  }

}





nextPage(): void {

  if (this.currentPage < this.totalPages) {

    this.changePage(
      this.currentPage + 1
    );

  }

}


readonly heroes:Record<string,CategoryHero> = {



'nile-cruises':{

title:'Nile Cruises in Egypt',

description:
'Discover the magic of Egypt through unforgettable Nile cruise experiences between Luxor and Aswan.',

image:
'assets/images/categories/nile-cruise.jpg'

},




'desert-safari':{

title:'Egypt Desert Safari Adventures',

description:
'Experience the Egyptian desert with exciting safari trips, dunes, camps and unforgettable adventures.',

image:
'assets/images/categories/desert.jpg'

},




'snorkeling':{

title:'Snorkeling Tours in Egypt',

description:
'Explore the Red Sea underwater world with amazing snorkeling experiences in Egypt.',

image:
'assets/images/categories/snorkeling.jpg'

},




'hot-air-balloon':{

title:'Hot Air Balloon Egypt',

description:
'Enjoy breathtaking sunrise views above Luxor and discover Egypt from the sky.',

image:
'assets/images/categories/balloon.jpg'

}


};







constructor(
private route:ActivatedRoute
){}







ngOnInit():void {


this.route.paramMap.subscribe(params=>{


this.category =
params.get('category') ?? '';



this.loadCategory();


});


}








loadCategory(){



this.hero =
this.heroes[this.category]
||
{

title:this.formatTitle(this.category),

description:
`Discover amazing ${this.formatTitle(this.category)} experiences in Egypt.`,

image:
'assets/images/categories/default.jpg'

};




this.title =
this.hero.title;





this.allTrips =
TRIPS.filter(trip=>

trip.type.includes(
this.category
)

);





this.totalPages =
Math.ceil(
this.allTrips.length /
this.pageSize
);



this.changePage(1);



}









changePage(page:number){


this.currentPage = page;



const start =
(page - 1) *
this.pageSize;



this.trips =
this.allTrips.slice(
start,
start + this.pageSize
);



}








pages(){

return Array.from(
{
length:this.totalPages
},
(_,i)=>i+1
);

}







formatTitle(value:string){

return value
.split('-')
.map(word=>

word.charAt(0).toUpperCase()
+
word.slice(1)

)
.join(' ');

}



}
