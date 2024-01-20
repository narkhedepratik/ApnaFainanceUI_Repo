import { Component, OnInit } from '@angular/core';



import { EnquiryServiceService } from '../../../services/enquiry-service.service';
import { CibilSCore } from '../../../model/cibil-score';
import { Enquiry } from '../../../model/enquiry';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../../../services/customerservice.service';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrl: './add-enquiry.component.css'
})
export class AddEnquiryComponent implements OnInit{

 

  constructor(private fb:FormBuilder,public customerService:CustomerserviceService,private router:Router){}
 
  CustomerDocuments:FormGroup; 
  customerDetails:FormGroup;
  customerAddress: FormGroup;
  localAddress: FormGroup;
  permanentAddress: FormGroup;
  medicalInfo: FormGroup;
  accountDetails: FormGroup;
  selectphoto:any;
  selectpanCard:any;
  selectadharCard:any;
  selectsignature:any;
  data:any;
  currentStep: number = 1;
  
  ngOnInit(): void {
    this.localAddress=this.fb.group({
      
      areaname:[],
      cityname:[],
      district:[],
      state:[],
      pincode:[]
      
    })
  
   this.permanentAddress=this.fb.group({
    
    areaname:[],
    cityname:[],
    district:[],
    state:[],
    pincode:[]
   })
    this.customerAddress=this.fb.group(
      {
    customerAddressId:[],
    localAddress:this.localAddress,
    permanentAddress:this.permanentAddress
  }
  )

      this.medicalInfo=this.fb.group({
        billId:[],
        patientId:[],
        billingDate:[],
        treatment:[]
        
       })
       this.accountDetails=this.fb.group({
        accountid:[],
        accountType:[],
        accountBalance:[],
        accountHolderName:[],
        accountStatus:[],
        accountNumber:[]
       })
    this.customerDetails=this.fb.group(
      {
        customerId:[],
        customerName:[],
        customerDateOfBirth:[],
        customerAge:[],
        customerGender:[],
        customerEmail:[],
        customerMobileNumber:[],

        customerAddress:this.customerAddress,
        medicalInfo:this.medicalInfo,
        accountDetails:this.accountDetails 
       
        



      }
    );
  }

  onSelectpanCard(event:any)
  {
    this.selectpanCard=event.target.files[0];

  }

  onSelectphoto(event:any)
  {
    this.selectphoto=event.target.files[0];
  }

  onSelectadharCard(event:any)
  {
    this.selectadharCard=event.target.files[0];
  }

  onSelectsignature(event:any)
  {
    this.selectsignature=event.target.files[0];
  }

  onSubmitCustomerDetails()
  {
    var jsondata=JSON.stringify(this.customerDetails.value);
    var fdata=new FormData();
    fdata.append("photo",this.selectphoto);
    fdata.append("panCard",this.selectpanCard);
    fdata.append("aadharCard",this.selectadharCard);
    fdata.append("signature",this.selectsignature);
    fdata.append("loanApplicationJson",jsondata);
    this.customerService.saveCustomerDetails(fdata).subscribe();
    

    alert("Submitted Successfully..!")
  }

  
  setCurrentStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  dochange(e)
{
  if(e.target.checked)
  {
    this.permanentAddress.setValue(this.localAddress.value);
  }
  else{
    this.permanentAddress.reset();
  }
}
}


