import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewdefaultersComponent } from './viewdefaulters/viewdefaulters.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewStatisticsComponent,
    ViewemployeeComponent,
    ViewdefaultersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
