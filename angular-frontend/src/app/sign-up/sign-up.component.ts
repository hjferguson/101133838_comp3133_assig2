import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf] 
})
export class SignUpComponent {
  formData = {
    username: '',
    email: '',
    password: '',
  };
  serverMessage = '';

  constructor(private signUpService: SignUpService, private router: Router) {}

  handleChange(event: any): void {
    const { name, value } = event.target;
    this.formData = { ...this.formData, [name]: value };
  }

  handleSubmit(): void {
    this.signUpService.signUp(this.formData).subscribe({
      next: (response) => {
        this.serverMessage = response.message;

        if (response.status === 201) {
          this.router.navigateByUrl('/signin');
        } else {
          this.serverMessage = response.message || "An unexpected error occurred. Please try again later.";
        }
      },
      error: (error) => {
        console.error('Signup failed:', error);
        this.serverMessage = error.error.message || 'Sign up failed. Please try again later...';
      }
    });
  }
}
