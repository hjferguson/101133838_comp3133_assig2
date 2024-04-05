import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; 
import { RouterLink, RouterLinkActive } from '@angular/router'; 
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive]
})
export class NavbarComponent {
  isAuthenticated = false; // No longer an @Input

  constructor(private authService: AuthService) {
    // Subscribe to the authentication state
    this.authService.isAuthenticated.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  logout(): void {
    this.authService.logout(); // Use AuthService for logout
  }
}
