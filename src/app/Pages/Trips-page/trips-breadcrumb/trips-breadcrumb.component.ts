import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trips-breadcrumb',
  templateUrl: './trips-breadcrumb.component.html',
  styleUrls: ['./trips-breadcrumb.component.css'],
  standalone: false
})
export class TripsBreadcrumbComponent {

  @Input() pageTitle: string = '';

}
