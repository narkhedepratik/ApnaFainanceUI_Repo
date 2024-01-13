import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewdefaultersComponent } from './viewdefaulters/viewdefaulters.component';

const routes: Routes = [
  {path:'statistics' ,component:ViewStatisticsComponent},
  {path:'add_emp' , component:AddEmployeeComponent},
  {path:'view_emps' , component:ViewemployeeComponent},
  {path:'view_defaulter' , component:ViewdefaultersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
