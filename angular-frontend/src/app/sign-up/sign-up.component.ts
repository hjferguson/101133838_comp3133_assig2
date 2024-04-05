import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  constructor(private router: Router) {}

  handleChange(event: any): void {
    const { name, value } = event.target;
    this.formData = { ...this.formData, [name]: value };
  }

  async handleSubmit(event: Event): Promise<void> {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/v2/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      });

      const result = await response.json();
      this.serverMessage = result.message;

      if (response.status === 201) {
        this.router.navigateByUrl('/signin');
      } else {
        this.serverMessage = result.message || "An unexpected error occurred. Please try again later.";
      }
    } catch (error) {
      console.error('Signup failed:', error);
      this.serverMessage = 'Sign up failed. Please try again later...';
    }
  }
}
