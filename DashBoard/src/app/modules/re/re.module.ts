import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddEnquiryComponent,
    ViewEnquiryComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ReModule { }
