import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

interface Employee {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: 'male' | 'female' | 'other';
  salary: number;
}

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf]
})
export class EmployeePageComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  newEmployee: Partial<Employee> = { first_name: '', last_name: '', email: '', gender: 'male', salary: 0 };
  showAddForm = false;
  isUpdating = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (response: any) => this.employees = response.data,
      error: (error: any) => console.error('Error fetching employees:', error)
    });
  }

  handleEmployeeClick(employee: Employee): void {
    this.selectedEmployee = employee;
    this.newEmployee = { ...employee };
    this.isUpdating = true;
    this.showAddForm = true;
  }

  handleUpdateEmployee(): void {
    if (this.selectedEmployee && this.newEmployee) {
      this.employeeService.updateEmployee(this.selectedEmployee._id, this.newEmployee as Employee).subscribe({
        next: () => {
          this.fetchEmployees();
          this.resetForm();
        },
        error: (error: any) => console.error('Error updating employee:', error)
      });
    }
  }

  handleCreateNew(): void {
    this.employeeService.createEmployee(this.newEmployee as Employee).subscribe({
      next: () => {
        this.fetchEmployees();
        this.resetForm();
      },
      error: (error: any) => console.error('Error creating new employee:', error)
    });
  }

  handleDeleteEmployee(employeeId: string): void {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: () => this.fetchEmployees(),
      error: (error: any) => console.error('Error deleting employee:', error)
    });
  }

  resetForm(): void {
    this.showAddForm = false;
    this.isUpdating = false;
    this.selectedEmployee = null;
    this.newEmployee = { first_name: '', last_name: '', email: '', gender: 'male', salary: 0 };
  }
}
