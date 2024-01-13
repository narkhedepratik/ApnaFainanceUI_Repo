import { Component,OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
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
        firstName:[],
        lastName:[],
        age:[],
        email:[],
        mobileNo:[],
        pancardNo:[],
        /* cibilScore:[],
        cibilScoreDateTime:[],
        status:[] */
        
      }
    )
  }

  onEnquiry(){

    
  this.enquiryservice.saveEnquiryDetails(this.enquiryForm.value).subscribe();
  alert("product Register..!")
    
  }
}

