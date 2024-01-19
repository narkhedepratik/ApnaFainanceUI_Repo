import { Component, OnInit } from '@angular/core';
import { EnquiryServiceService } from '../../../services/enquiry-service.service';
import { Router } from '@angular/router';
import { CibilSCore } from '../../../model/cibil-score';
import { FormGroup } from '@angular/forms';
import { Enquiry } from '../../../model/enquiry';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrl: './add-enquiry.component.css'
})
export class AddEnquiryComponent implements OnInit{
  constructor(private enquiryService:EnquiryServiceService,router:Router){}
 enquiry:Enquiry[];
 
 ngOnInit(): void {
  this.enquiryService.getEnquiryDetails().subscribe((data:Enquiry[])=>{
    this.enquiry=data;
  })
  
 }
 onClick()
 {
  console.log("cibil details...");
  this.enquiryService.getEnquiryDetails().subscribe();
 }

}
