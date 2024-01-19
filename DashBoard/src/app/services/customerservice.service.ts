import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }

  saveCustomerDetails(customer:any)
  {
   return this.http.post('http://localhost:9090/customer/create_customer',customer);
  }
}
