import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';

import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EditpatientprofileComponent } from './editpatientprofile/editpatientprofile.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PatientappointmentComponent } from './patientappointment/patientappointment.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SingledoctorComponent } from './singledoctor/singledoctor.component';
import { UserpathologyComponent } from './userpathology/userpathology.component';
import { UserpharmacyComponent } from './userpharmacy/userpharmacy.component';

const routes: Routes = [
  {path:'patientdoctors',component:DoctorsComponent,canActivate:[AuthguardGuard]},
  {path:'singledoctor/:userId',component:SingledoctorComponent,canActivate:[AuthguardGuard]},
  {path:'patientappointment',component:PatientappointmentComponent,canActivate:[AuthguardGuard]},
  {path:'doctorappointment/:userId',component:DoctorappointmentComponent,canActivate:[AuthguardGuard]},
  {path:'patientprofile',component:PatientprofileComponent,canActivate:[AuthguardGuard]},
  {path:'patientpharmacy',component:PharmacyComponent,canActivate:[AuthguardGuard]},
  {path:'patientpathology',component:PathologyComponent,canActivate:[AuthguardGuard]},
  {path:'userpharmacy/:pharmacyId',component:UserpharmacyComponent,canActivate:[AuthguardGuard]},
  {path:'userpathology/:pathologyId',component:UserpathologyComponent,canActivate:[AuthguardGuard]},
  {path:'editpatientprofile',component:EditpatientprofileComponent,canActivate:[AuthguardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
