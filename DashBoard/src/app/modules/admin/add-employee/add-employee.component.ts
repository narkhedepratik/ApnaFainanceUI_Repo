import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../model/employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{

  constructor(private fb:FormBuilder,private employeeService:EmployeeService,private activeRouter:ActivatedRoute){}

  registrationForm:FormGroup;
  
  ngOnInit(): void {
    this.registrationForm=this.fb.group(
      {
        employeeId:[0],
        employeeName:[],
        employeeEmail:[],
        employeeProfile:[],

      //  password:[],   

      }
    );
    this.patchEditValue()
  }



  onRegistration()
  {    
    console.log(this.registrationForm.value);
    if(this.registrationForm.controls['employeeId'].value==0)
    {
      this.employeeService.saveEmployeeDetails(this.registrationForm.value).subscribe();
      alert("Employee Registered..!")
    }
    else
    {
      this.employeeService.updateEmployeeDetails(this.registrationForm.value).subscribe();
      alert("Employee details update...!")
    }
    this.registrationForm.reset();
  }

  patchEditValue()
  {
    this.activeRouter.paramMap.subscribe(
      param=>{
        let prodJson:string = param.get('data');
        let editdetails:Employee = JSON.parse(prodJson);
        this.registrationForm.patchValue(editdetails);
      })

  }
}

