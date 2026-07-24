import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SidebarService } from '../../../core/Services/sidebar.service';

interface NavItem {
  label: string;
  icon: string;      // SVG path "d" attribute
  route?: string;
  badge?: string;
  badgeColor?: 'blue' | 'orange';
  children?: NavItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: false,
})
export class SidebarComponent implements OnInit, OnDestroy {

  isOpen = true;
  currentUrl = '';

  private sub = new Subscription();

  menuItems: NavItem[] = [
    {
      label: 'Dashboard',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      route: '/admin/dashboard'
    },
    {
      label: 'Users',
      icon: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-4a4 4 0 10-8 0 4 4 0 008 0zm6 4a4 4 0 10-8 0',
      route: '/admin/users',
      badge: '12',
      badgeColor: 'blue'
    },
    {
      label: 'Trips',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      route: '/admin/trips'
    },
    {
      label: 'Bookings',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      route: '/admin/bookings',
      badge: '3',
      badgeColor: 'orange'
    },
    {
      label: 'Packages',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      route: '/admin/packages'
    },
    {
      label: 'Settings',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z',
      children: [
        { label: 'General', icon: '', route: '/admin/settings/general' },
        { label: 'Security', icon: '', route: '/admin/settings/security' },
        { label: 'Billing', icon: '', route: '/admin/settings/billing' }
      ]
    }
  ];

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.sidebarService.opened$.subscribe(open => (this.isOpen = open))
    );

    this.currentUrl = this.router.url;
    this.autoExpandActiveGroup();

    this.sub.add(
      this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(() => {
          this.currentUrl = this.router.url;
          this.autoExpandActiveGroup();
          this.closeOnMobile();
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  isActive(route?: string): boolean {
    return !!route && this.currentUrl.startsWith(route);
  }

  isGroupActive(item: NavItem): boolean {
    return !!item.children?.some(child => this.isActive(child.route));
  }

  toggleGroup(item: NavItem): void {
    item.expanded = !item.expanded;
  }

  closeSidebar(): void {
    this.sidebarService.close();
  }

  private autoExpandActiveGroup(): void {
    this.menuItems.forEach(item => {
      if (item.children && this.isGroupActive(item)) {
        item.expanded = true;
      }
    });
  }

  private closeOnMobile(): void {
    if (window.innerWidth < 1024) {
      this.sidebarService.close();
    }
  }
}
