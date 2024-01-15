import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  saveEmployeeDetails(employee:Employee)
  {
    return this.http.post('http://localhost:9090/employee/create_employee',employee);
  }

  getEmployeeDetails()
  {
    return this.http.get('http://localhost:9090/employee/GetAllEmployeesData');
  }

  updateEmployeeDetails(employee:Employee)
  {
    return this.http.put('http://localhost:9090/employee/update',employee);
  }

  deleteEmployeeDetails(employeeId:number)
  {
    return this.http.delete('http://localhost:9090/employee/delete/'+employeeId);
  }
}
