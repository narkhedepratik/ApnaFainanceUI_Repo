import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {

  constructor(private http:HttpClient) { }
  saveEnquiryDetails(enquiry:Enquiry)
   {
    return this.http.post('http://localhost:9090/enquiry/create_enquiry',enquiry)
   }

   getEnquiryDetails()
   {
      return this.http.get('http://localhost:9090/enquiry/enquiries');
   }
}
