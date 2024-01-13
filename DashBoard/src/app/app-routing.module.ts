import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { ContactComponent } from './templates/contact/contact.component';
import { LoginComponent } from './includes/login/login.component';
import { AppLayoutComponent } from './includes/app-layout/app-layout.component'; 
import { EmiCalculatorComponent } from './includes/emi-calculator/emi-calculator.component';
import { EligibilityComponent } from './templates/eligibility/eligibility.component';
import { EnquireComponent } from './includes/enquire/enquire.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent, children:[
    {path:'',redirectTo:'about',pathMatch:'full'},
    {path:'about' , component:AboutComponent},
    {path:'contact' ,component:ContactComponent},
    {path:'login',component:LoginComponent},
    {path:'enquire',component:EnquireComponent},
    {path:'eligibility',component:EligibilityComponent},
    {path:'emicalculator',component:EmiCalculatorComponent}
  ]
  },
  {
    path:'apnafinance' ,component:AppLayoutComponent, children:[

      {path:'admin', loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)},
      {path:'re' ,loadChildren:()=>import('./modules/re/re.module').then(m=>m.ReModule)}

    ]
  }
];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
