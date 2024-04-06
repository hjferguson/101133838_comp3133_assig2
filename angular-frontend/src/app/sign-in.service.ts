import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private signInUrl = 'https://one01133838-comp3133-assig2.onrender.com/api/v2/user/signin'; 

  constructor(private http: HttpClient) { }

  signIn(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.signInUrl, credentials);
  }
}