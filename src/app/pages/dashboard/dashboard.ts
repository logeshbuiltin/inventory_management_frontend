import { Header } from '../../core/header/header';
import { Sidebar } from '../../core/sidebar/sidebar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
