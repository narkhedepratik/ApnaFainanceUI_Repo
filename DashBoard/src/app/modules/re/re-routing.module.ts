import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { LoanComponent } from './loan/loan.component';

const routes: Routes = [
  {path:'add_enquiry' , component:AddEnquiryComponent},
{path:'view_enquiry' , component:ViewEnquiryComponent},
{path:'loan',component:LoanComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
