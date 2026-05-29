import { Component } from '@angular/core';
import { Sidebar } from '../../core/sidebar/sidebar';
import { Header } from '../../core/header/header';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [Sidebar, Header],
  templateUrl: './employee.html'
})
export class Employee {}
