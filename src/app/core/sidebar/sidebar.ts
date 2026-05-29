import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  isMinimized = false;

  ngOnInit() {
    const savedState = localStorage.getItem('sidebar_minimized');
    if (savedState !== null) {
      this.isMinimized = savedState === 'true';
    }
  }

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
    localStorage.setItem('sidebar_minimized', this.isMinimized.toString());
  }
}
