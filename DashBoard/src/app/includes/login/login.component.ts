import { Component ,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder,private router:Router,
            private loginService:LoginService){}
 
  loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        username:[],
        password:[]
      }
    )
  }

  onLogin()
  {
    let un:string=this.loginForm.controls['username'].value;
    let ps:string=this.loginForm.controls['password'].value;
    
      this.loginService.authenticateUser(un,ps).subscribe(
        (employee:Employee)=>{
          console.log(employee);
    
    if(employee!=null)
    if(employee.employeeProfile=='ADMIN')
    {
          sessionStorage.setItem('role','admin')
          this.router.navigateByUrl('/apnafinance/admin');   
    }
    else if(employee.employeeProfile=='CRM')
    {
           sessionStorage.setItem('role','re')

          this.router.navigateByUrl('/apnafinance/re');   
    }
    else{
      alert('Enter valid username or password..!')
    }
  }
  )

  }
}


