import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';



const routes: Routes = [
  {path:'add_enquiry' , component:AddEnquiryComponent},
{path:'view_enquiry' , component:ViewEnquiryComponent},
{path:'view/:customerId',component:ViewCustomerComponent}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
