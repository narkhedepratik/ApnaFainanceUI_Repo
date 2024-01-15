import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryServiceService } from '../../services/enquiry-service.service';
import { Enquiry } from '../../model/enquiry';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit {

  constructor(private enquiryService:EnquiryServiceService ,private router:Router){}

  enquiry:Enquiry[]
  ngOnInit(): void {
    
    this.enquiryService.getEnquiryDetails().subscribe((data:Enquiry[])=>
    {
      this.enquiry=data;
    })

  }

}
