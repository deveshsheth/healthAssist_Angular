import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DietComponent } from './diet/diet.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PatientComponent } from './patient/patient.component';
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
  {path:'editdoctor',component:EditdoctorComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
