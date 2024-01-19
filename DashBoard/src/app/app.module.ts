import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { HeaderComponent } from './templates/header/header.component';
import { ContactComponent } from './templates/contact/contact.component';

import { AppLayoutComponent } from './includes/app-layout/app-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './includes/login/login.component';
import { EmiCalculatorComponent } from './includes/emi-calculator/emi-calculator.component';
import { AppMenuComponent } from './includes/app-menu/app-menu.component';
import { AppHeaderComponent } from './includes/app-header/app-header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { EligibilityComponent } from './templates/eligibility/eligibility.component';
import { EnquireComponent } from './includes/enquire/enquire.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEnquiryComponent } from './includes/view-enquiry/view-enquiry.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    LoginComponent,
    AppLayoutComponent,
    EmiCalculatorComponent,
    AppMenuComponent,
    AppHeaderComponent,
    FooterComponent,
    EligibilityComponent,
    EnquireComponent,
    ViewEnquiryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
