import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common'; 
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive] 
})
export class NavbarComponent {
  @Input() isAuthenticated = false;
  @Output() onLogout = new EventEmitter<void>();

  logout(): void {
    this.onLogout.emit();
  }
}
