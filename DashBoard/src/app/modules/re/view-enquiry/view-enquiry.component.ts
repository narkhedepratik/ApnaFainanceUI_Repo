import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../../services/customerservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit{
  constructor(private customerService:CustomerserviceService ,private router:Router,private activateRouter:ActivatedRoute){}
  data:any;
  customer:Customer[];

  ngOnInit(): void {
    this.customerService.getCustomerDetails().subscribe((d=>{
      this.data=d;
      
  
  }));
  
  }
 viewSingleData(customerId:any)
  {
   alert("view Single data works....");
  this.router.navigateByUrl('/apnafinance/re/view/'+customerId);
  } 
  ViewCibilInfo()
  {
    alert("works..!");
    this.customerService.getCustomerDetails().subscribe();
  }
}

