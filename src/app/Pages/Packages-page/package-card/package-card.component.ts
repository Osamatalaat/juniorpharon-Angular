import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Package } from '../../../core/models/package.model';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css'],
  standalone: false
})
export class PackageCardComponent {

  @Input() package!: Package;

  constructor(
    private router: Router
  ) {}

  goToDetails(): void {

    this.router.navigate([
      '/packages',
      this.package.id
    ]);

  }

}
