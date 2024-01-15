import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../../model/employee';


@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrl: './viewemployee.component.css'
})

export class ViewemployeeComponent implements OnInit {

 

  
constructor(private employeeService:EmployeeService,private router:Router){}
employees:Employee[];
ngOnInit(): void {
  this.employeeService.getEmployeeDetails().subscribe((data:Employee[])=>{
      this.employees=data;
  })
}

onEdit(employee:Employee)
{
  let employeeJson:string=JSON.stringify(employee);
  this.router.navigateByUrl('/apnafinance/admin/edit/'+employeeJson);
}

onDelete(employeeId:number)
{
  this.employeeService.deleteEmployeeDetails(employeeId).subscribe();
  window.location.reload();
}
}
