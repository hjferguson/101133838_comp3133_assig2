import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private signInUrl = 'http://localhost:3000/api/v2/user/signin'; 

  constructor(private http: HttpClient) { }

  signIn(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.signInUrl, credentials);
  }
}