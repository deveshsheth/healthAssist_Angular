import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctordietComponent } from './doctordiet/doctordiet.component';
import { DoctordiseaseComponent } from './doctordisease/doctordisease.component';
import { DoctormedicineComponent } from './doctormedicine/doctormedicine.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'doctorDashboard',component:DashboardComponent,canActivate:[AuthguardGuard]},
  
  {path:'profile',component:ProfileComponent,canActivate:[AuthguardGuard]},
  
  {path:'appointment',component:AppointmentComponent,canActivate:[AuthguardGuard]},

  {path:'prescription/:appointmentid',component:PrescriptionComponent,canActivate:[AuthguardGuard]},
  {path:'editprofile',component:EditprofileComponent,canActivate:[AuthguardGuard]},

  {path:'doctormedicine',component:DoctormedicineComponent,canActivate:[AuthguardGuard]},
  {path:'editdoctormedicine/:medicineid',component:DoctormedicineComponent,canActivate:[AuthguardGuard]},


  {path:'doctordisease',component:DoctordiseaseComponent,canActivate:[AuthguardGuard]},
  {path:'editdoctordisease/:diseaseid',component:DoctordiseaseComponent,canActivate:[AuthguardGuard]},


  {path:'doctordiet',component:DoctordietComponent,canActivate:[AuthguardGuard]},
  {path:'editdoctordiet/:dietid',component:DoctordietComponent,canActivate:[AuthguardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
