import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { EmployeeServiceService } from '../../../services/employee-service.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{
  constructor(private fb:FormBuilder, private employeeService:EmployeeServiceService){}
  registrationForm:FormGroup;
  
  ngOnInit(): void {
    this.registrationForm=this.fb.group(
      {
        employeeName:[],
        employeeEmail:[],
        employeeProfile:[],
       /* password:[]*/
      }
    )
  }

  onRegistration(){

    this.employeeService.saveEmployee(this.registrationForm.value).subscribe();
    alert("Employee Registered..!")
  
  }
}
