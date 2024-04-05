import { Component, ChangeDetectorRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef 
  ) {
    
    this.authService.isAuthenticated.subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
      this.changeDetectorRef.detectChanges();
    });
  }

  logout(): void {
    this.authService.logout();
  }
}