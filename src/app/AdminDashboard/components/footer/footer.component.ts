import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-footer',

  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: false
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  companyName: string = 'Your Company';
  appVersion: string = '1.0.0';
  systemStatus: string = 'All systems operational';

  quickLinks: any[] = [
    { label: 'Docs', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' }
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
