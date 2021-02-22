import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { HeaderComponent } from '../header/header.component';
import { NewpasswordComponent } from '../newpassword/newpassword.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'newpassword',component:NewpasswordComponent},
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupLoginRoutingModule { }
