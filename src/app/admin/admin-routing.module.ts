import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';
import { CityComponent } from './city/city.component';
import { AddclinicComponent } from './clinic/addclinic/addclinic.component';
import { ClinicComponent } from './clinic/clinic.component';
import { EditclinicComponent } from './clinic/editclinic/editclinic.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdddietComponent } from './diet/adddiet/adddiet.component';
import { DietComponent } from './diet/diet.component';
import { EditdietComponent } from './diet/editdiet/editdiet.component';
import { DiseaseComponent } from './disease/disease.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { ProfileComponent } from './doctor/profile/profile.component';

import { MedicineComponent } from './medicine/medicine.component';
import { AddpathologyComponent } from './pathology/addpathology/addpathology.component';
import { EditpathologyComponent } from './pathology/editpathology/editpathology.component';
import { PathologyComponent } from './pathology/pathology.component';
import { AddpatientComponent } from './patient/addpatient/addpatient.component';

import { PatientComponent } from './patient/patient.component';
import { AddpharmacyComponent } from './pharmacy/addpharmacy/addpharmacy.component';
import { EditpharmacyComponent } from './pharmacy/editpharmacy/editpharmacy.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { StateComponent } from './state/state.component';
import { AddusersComponent } from './users/addusers/addusers.component';
import { EditusersComponent } from './users/editusers/editusers.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard]},
  
  // patient
  {path:'patient',component:PatientComponent,canActivate:[AuthguardGuard]},
  {path:'addpatient',component:AddpatientComponent,canActivate:[AuthguardGuard]},
  
  //diet 
  {path:'diet',component:DietComponent,canActivate:[AuthguardGuard]},
  {path:'adddiet',component:AdddietComponent,canActivate:[AuthguardGuard]},
  {path:'editdiet/:dietid',component:EditdietComponent,canActivate:[AuthguardGuard]},
  
  //doctor
  {path:'doctor',component:DoctorComponent,canActivate:[AuthguardGuard]},
  {path:'adddoctor',component:AdddoctorComponent,canActivate:[AuthguardGuard]},
  {path:'editdoctor/:userId',component:EditdoctorComponent,canActivate:[AuthguardGuard]},
  {path:'profile/:userId',component:ProfileComponent,canActivate:[AuthguardGuard]},
  {path:'editdoctclinic/:doctclinicid',component:ProfileComponent,canActivate:[AuthguardGuard]},
  //pharmacy
  {path:'pharmacy',component:PharmacyComponent,canActivate:[AuthguardGuard]},
  {path:'addpharmacy',component:AddpharmacyComponent,canActivate:[AuthguardGuard]},
  {path:'editpharmacy/:pharmacyId',component:EditpharmacyComponent,canActivate:[AuthguardGuard]},
  {path:'assignuserpharmacy/:pharmacyId',component:PharmacyComponent,canActivate:[AuthguardGuard]},
  
  //pathology
  {path:'pathology',component:PathologyComponent,canActivate:[AuthguardGuard]},
  {path:'addpathology',component:AddpathologyComponent,canActivate:[AuthguardGuard]},
  {path:'editpathology/:pathologyId',component:EditpathologyComponent,canActivate:[AuthguardGuard]},
  {path:'assignuserpathology/:pathologyId',component:PathologyComponent,canActivate:[AuthguardGuard]},
  
  //clinic
  {path:'clinic',component:ClinicComponent,canActivate:[AuthguardGuard]},
  {path:'addclinic',component:AddclinicComponent,canActivate:[AuthguardGuard]},
  {path:'editclinic/:clinicid',component:EditclinicComponent,canActivate:[AuthguardGuard]},
  
  //users
  {path:'users',component:UsersComponent,canActivate:[AuthguardGuard]},
  {path:'addusers',component:AddusersComponent,canActivate:[AuthguardGuard]},
  {path:'editusers/:userId',component:EditusersComponent,canActivate:[AuthguardGuard]},
  
  //medicine
  {path:'medicine',component:MedicineComponent,canActivate:[AuthguardGuard]},
  {path:'editmedicine/:medicineid',component:MedicineComponent,canActivate:[AuthguardGuard]},
  
  //disease
  {path:'disease',component:DiseaseComponent,canActivate:[AuthguardGuard]},
  {path:'editdisease/:diseaseid',component:DiseaseComponent,canActivate:[AuthguardGuard]},
  
  //city
  {path:'city',component:CityComponent,canActivate:[AuthguardGuard]},
  {path:'editcity/:cityid',component:CityComponent,canActivate:[AuthguardGuard]},

  //state
  {path:'state',component:StateComponent,canActivate:[AuthguardGuard]},
  {path:'editstate/:stateid',component:StateComponent,canActivate:[AuthguardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
