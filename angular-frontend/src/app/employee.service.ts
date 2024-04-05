// src/app/employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api/v2/emp/employees';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getEmployeeById(employeeId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${employeeId}`);
  }

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post(this.apiUrl, employeeData);
  }

  updateEmployee(employeeId: string, employeeData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${employeeId}`, employeeData);
  }

  deleteEmployee(employeeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}?eid=${employeeId}`);
  }

  getStatistics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`); 
  }
}
