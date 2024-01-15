import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { Employee } from '../../../model/employee';


@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrl: './viewemployee.component.css'
})
export class ViewemployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeServiceService){}

  employees:Employee[]
  ngOnInit(): void {
    
    this.employeeservice.getAllEmployees().subscribe((
      data:Employee[])=>{
        this.employees=data;
        
      })
    
  }
  
}
