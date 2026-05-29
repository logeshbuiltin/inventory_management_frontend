import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../core/footer/footer';

@Component({
  selector: 'app-login',
  imports: [Footer, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/dashboard']);
  }
}

