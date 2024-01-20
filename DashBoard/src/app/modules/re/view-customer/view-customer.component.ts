import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../../services/customerservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent implements OnInit{
  constructor(private customerService:CustomerserviceService,private router:Router,private activateRouter:ActivatedRoute){}
  customer:Customer;
  data:any;
  customerId:any;
  ngOnInit(): void {
    
    this.activateRouter.params.subscribe(params=>{this.customerId=params['customerId']})
    this.customerService.getSingleData(this.customerId).subscribe((data:Customer)=>{this.customer=data;})
  }

}
