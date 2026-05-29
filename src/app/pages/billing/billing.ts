import { Header } from '../../core/header/header';
import { Sidebar } from '../../core/sidebar/sidebar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  imports: [Sidebar, Header],
  templateUrl: './billing.html',
  styleUrl: './billing.css',
})
export class Billing {}
