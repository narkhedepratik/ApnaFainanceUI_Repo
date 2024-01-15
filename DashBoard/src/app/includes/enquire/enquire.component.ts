import { Component,OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryServiceService } from '../../services/enquiry-service.service';

@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrl: './enquire.component.css'
})
export class EnquireComponent implements OnInit{
  constructor(private fb:FormBuilder,public enquiryservice:EnquiryServiceService,private router:Router){}
 
  enquiryForm:FormGroup;
  
  ngOnInit(): void {
    this.enquiryForm=this.fb.group(
      {
        firstName:['', [Validators.required, Validators.minLength(2)]],
        lastName:['', [Validators.required, Validators.minLength(2)]],
        age:['', [Validators.required, Validators.min(21), Validators.max(55)]],
        emailId:['',[Validators.required,Validators.email]],
        mobileNo:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^[0-9]{10}$')]],
        pancardNo: ['', [Validators.required, Validators.pattern('^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$')]],
       
      }
    )
  }


  onEnquiry(){

    
  this.enquiryservice.saveEnquiryDetails(this.enquiryForm.value).subscribe();
  alert("product Register..!")
    
  }
}

