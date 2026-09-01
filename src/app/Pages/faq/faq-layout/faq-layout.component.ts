import { Component } from '@angular/core';


@Component({

selector:'app-faq-layout',

templateUrl:'./faq-layout.component.html',

styleUrls:['./faq-layout.component.css'],

standalone:false

})

export class FaqLayoutComponent {
searchValue = '';



onSearch(value:string){

  this.searchValue = value;

  console.log(this.searchValue);

}
selectedCategory = 'all';


onCategoryChange(category:string){


  this.selectedCategory = category;


}

}
