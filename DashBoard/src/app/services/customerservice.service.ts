import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient, activateRouter:ActivatedRoute) { }

  saveCustomerDetails(customer:any)
  {
   return this.http.post('http://localhost:9090/customer/create_customer',customer);
  }
  getCustomerDetails()
  {
    return this.http.get('http://localhost:9090/customer/getAllCustomer');
  }
  getSingleData(customerId:any)
  {
    return this.http.get('http://localhost:9090/customer/Customer/'+customerId);
  }
}
