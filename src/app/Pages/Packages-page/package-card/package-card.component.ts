import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css'],
  standalone: false
})
export class PackageCardComponent  {

  @Input() package: any;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/packages', this.package.id]);
  }

}
