import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarService } from '../../../core/Services/sidebar.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false,
})
export class NavbarComponent {

  isCollapsed = true;
  showNotifications = false;
  pageTitle = 'Dashboard';

  constructor(
    private router: Router,
    private sidebarService: SidebarService
  ) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });

    this.updateTitle();
  }

  get sidebarOpened(): boolean {
    return this.sidebarService.isOpened;
  }

  collapse(): void {
    this.isCollapsed = !this.isCollapsed;

    // Close notifications if the profile menu opens
    if (!this.isCollapsed) {
      this.showNotifications = false;
    }
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;

    // Close the profile menu if notifications open
    if (this.showNotifications) {
      this.isCollapsed = true;
    }
  }

  closeNotifications(): void {
    this.showNotifications = false;
  }

  sidebarToggle(): void {
    this.sidebarService.toggle();
  }

  private updateTitle() {

    const url = this.router.url;

    if (url.includes('/users')) {
      this.pageTitle = 'Users';
    }
    else if (url.includes('/trips')) {
      this.pageTitle = 'Trips';
    }
    else if (url.includes('/bookings')) {
      this.pageTitle = 'Bookings';
    }
    else if (url.includes('/packages')) {
      this.pageTitle = 'Packages';
    }
    else if (url.includes('/settings')) {
      this.pageTitle = 'Settings';
    }
    else {
      this.pageTitle = 'Dashboard';
    }
  }

  getTitle() {
    return this.pageTitle;
  }

}
