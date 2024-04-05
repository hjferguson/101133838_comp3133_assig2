import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private baseUrl = 'http://localhost:3000/api/v2/user/signup'; 
  constructor(private http: HttpClient) { }

  signUp(userData: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.baseUrl, userData);
  }
}
