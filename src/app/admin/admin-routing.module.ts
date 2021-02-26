import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DietComponent } from './diet/diet.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { AddpathologyComponent } from './pathology/addpathology/addpathology.component';
import { EditpathologyComponent } from './pathology/editpathology/editpathology.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PatientComponent } from './patient/patient.component';
import { AddpharmacyComponent } from './pharmacy/addpharmacy/addpharmacy.component';
import { EditpharmacyComponent } from './pharmacy/editpharmacy/editpharmacy.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'pathology',component:PathologyComponent},
  {path:'patient',component:PatientComponent},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'diet',component:DietComponent},
  {path:'adddoctor',component:AdddoctorComponent},
  {path:'editdoctor',component:EditdoctorComponent},
  {path:'addpharmacy',component:AddpharmacyComponent},
  {path:'addpathology',component:AddpathologyComponent},
  {path:'editpharmacy',component:EditpharmacyComponent},
  {path:'editpathology',component:EditpathologyComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
