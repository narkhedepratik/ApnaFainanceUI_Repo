import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{
  constructor(private fb:FormBuilder){}
  registrationForm:FormGroup;
  
  ngOnInit(): void {
    this.registrationForm=this.fb.group(
      {
        employeeName:[],
        employeeEmail:[],
        employeeProfile:[],
        password:[],
        
        
      }
    )
  }

  onRegistration(){

    
  
  alert("Employee Registered..!")
    
  }
}
