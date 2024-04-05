import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service'; 
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf] 
})
export class SignInComponent {
  credentials = {
    email: '',
    password: '',
  };
  serverMessage = '';

  constructor(private signInService: SignInService, private router: Router) {}

  handleSignIn(): void {
    this.signInService.signIn(this.credentials).subscribe({
      next: (response) => {
        console.log('Sign-in successful, token:', response.token);
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/employees'); 
      },
      error: (error) => {
        console.error('Sign-in failed:', error);
        this.serverMessage = error.error.message || 'Sign-in failed. Please try again.';
      }
    });
  }
  
}
