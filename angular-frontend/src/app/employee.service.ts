// src/app/employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/v2/emp/employees';

  constructor(private http: HttpClient) {}

  // Method to create headers with the Authorization token
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEmployeeById(employeeId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${employeeId}`);
  }

  createEmployee(employeeData: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(this.apiUrl, employeeData, { headers });
  }

  updateEmployee(employeeId: string, employeeData: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.apiUrl}/${employeeId}`, employeeData, { headers });
  }

  deleteEmployee(employeeId: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}?eid=${employeeId}`, { headers });
  }

  getStatistics(): Observable<any> {
   
    return this.http.get(`${this.apiUrl}/stats`);
  }
}
