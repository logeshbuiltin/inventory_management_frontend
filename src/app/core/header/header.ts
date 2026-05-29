import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() pageName: string = 'Tactile POS';
  private searchService = inject(SearchService);
  private router = inject(Router);

  showUserMenu = false;
  showNotifications = false;

  notifications = [
    { id: 1, type: 'warning', title: 'Low Stock Alert', message: 'Espresso Beans are below 15 units.', time: '10m ago', icon: 'inventory_2' },
    { id: 2, type: 'error', title: 'Pending Payment', message: 'Vendor Invoice #8802 overdue.', time: '1h ago', icon: 'payments' },
    { id: 3, type: 'info', title: 'Shift Update', message: 'Alexander clocked in at 11:00 AM.', time: '2h ago', icon: 'schedule' }
  ];

  onSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.searchService.applyHighlight(term);
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    if (this.showUserMenu) this.showNotifications = false;
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) this.showUserMenu = false;
  }

  signOut() {
    this.showUserMenu = false;
    this.router.navigate(['/login']);
  }
}
