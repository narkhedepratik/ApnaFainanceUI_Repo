import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }


  saveEmployee(employee:Employee)
  {
    return this.http.post('http://localhost:9090/employee/create_employee',employee);
  }
  getAllEmployees()
  {
    return this.http.get('http://localhost:9090/employee/GetAllEmployeesData');
  }
}
