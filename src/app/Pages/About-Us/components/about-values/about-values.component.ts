import { Component } from '@angular/core';
import {
  ABOUT_VALUES,
  ValueItem
} from '../../data/about-us.data';





@Component({

  selector: 'app-about-values',

  templateUrl: './about-values.component.html',

  styleUrls: ['./about-values.component.css'],

  standalone: false,

})
export class AboutValuesComponent {


   readonly travelExperiences: ValueItem[] =
    ABOUT_VALUES;





  trackById(
    _index:number,
    item:ValueItem
  ):string {

    return item.id;

  }


}
