import { Header } from '../../core/header/header';
import { Sidebar } from '../../core/sidebar/sidebar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor',
  imports: [Sidebar, Header],
  templateUrl: './vendor.html',
  styleUrl: './vendor.css',
})
export class Vendor {}
