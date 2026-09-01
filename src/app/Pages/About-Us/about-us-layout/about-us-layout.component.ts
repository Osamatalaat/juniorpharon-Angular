import { Component } from '@angular/core';
import { SeoService } from '../../../core/Services/seo.service';

@Component({
  selector: 'app-about-us-layout',
  standalone: false,
  templateUrl: './about-us-layout.component.html',
  styleUrl: './about-us-layout.component.css'
})
export class AboutUsLayoutComponent {

  constructor(
  private readonly seoService: SeoService
)
{}

ngOnInit(): void {

  this.seoService.setAboutUsSeo();

}

}
