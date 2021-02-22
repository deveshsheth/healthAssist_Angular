import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PathologyComponent } from './pathology/pathology.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DietComponent } from './diet/diet.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { AddpathologyComponent } from './pathology/addpathology/addpathology.component';
import { EditpathologyComponent } from './pathology/editpathology/editpathology.component';
import { AddpharmacyComponent } from './pharmacy/addpharmacy/addpharmacy.component';
import { EditpharmacyComponent } from './pharmacy/editpharmacy/editpharmacy.component';

@NgModule({
  declarations: [DashboardComponent, DoctorComponent, PatientComponent, PharmacyComponent, PathologyComponent, DietComponent, CalendarComponent, AdddoctorComponent, EditdoctorComponent, AddpathologyComponent, EditpathologyComponent, AddpharmacyComponent, EditpharmacyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule
  ]
})
export class AdminModule { }
