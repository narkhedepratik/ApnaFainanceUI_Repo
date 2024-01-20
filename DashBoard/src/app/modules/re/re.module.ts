import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewCustomerComponent } from './view-customer/view-customer.component';







@NgModule({
  declarations: [
    AddEnquiryComponent,
    ViewEnquiryComponent,
    ViewCustomerComponent
   
   
    
  ],
  imports: [
    CommonModule,
    ReRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ReModule { }
