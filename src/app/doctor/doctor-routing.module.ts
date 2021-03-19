import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'doctorDashboard',component:DashboardComponent,canActivate:[AuthguardGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthguardGuard]},
  {path:'appointment',component:AppointmentComponent,canActivate:[AuthguardGuard]},
  {path:'prescription',component:PrescriptionComponent,canActivate:[AuthguardGuard]},
  {path:'editprofile',component:EditprofileComponent,canActivate:[AuthguardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
