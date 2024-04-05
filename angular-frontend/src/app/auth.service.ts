import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(this.checkTokenPresence());

  
  isAuthenticated: Observable<boolean> = this._isAuthenticated.asObservable();

  constructor() {}

 
  login(token: string): void {
    localStorage.setItem('token', token); 
    this._isAuthenticated.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    this._isAuthenticated.next(false);
  }

  
  private checkTokenPresence(): boolean {
    const token = localStorage.getItem('token');
    return !!token; 
  }
}
