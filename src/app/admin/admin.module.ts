import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DietComponent } from './diet/diet.component';

import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { EditdoctorComponent } from './doctor/editdoctor/editdoctor.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { AddpharmacyComponent } from './pharmacy/addpharmacy/addpharmacy.component';
import { EditpharmacyComponent } from './pharmacy/editpharmacy/editpharmacy.component';


import {ButtonModule} from 'primeng/button';
import { DataTablesModule } from 'angular-datatables';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ProgressBarModule} from 'primeng/progressbar';
import { ProfileComponent } from './doctor/profile/profile.component';
import { PathologyComponent } from './pathology/pathology.component';
import { AddpathologyComponent } from './pathology/addpathology/addpathology.component';
import { EditpathologyComponent } from './pathology/editpathology/editpathology.component';
import { ClinicComponent } from './clinic/clinic.component';
import { AddclinicComponent } from './clinic/addclinic/addclinic.component';
import { EditclinicComponent } from './clinic/editclinic/editclinic.component';


@NgModule({
  declarations: [DashboardComponent, DoctorComponent, PatientComponent, PharmacyComponent, DietComponent, AdddoctorComponent, EditdoctorComponent, AddpharmacyComponent, EditpharmacyComponent, ProfileComponent, PathologyComponent, AddpathologyComponent, EditpathologyComponent, ClinicComponent, AddclinicComponent, EditclinicComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    ButtonModule,
    DataTablesModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    ProgressBarModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class AdminModule { }
