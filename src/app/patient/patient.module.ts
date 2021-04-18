import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { DoctorsComponent } from './doctors/doctors.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { SingledoctorComponent } from './singledoctor/singledoctor.component';

import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { PatientappointmentComponent } from './patientappointment/patientappointment.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { DataTablesModule } from 'angular-datatables';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PathologyComponent } from './pathology/pathology.component';
import {RatingModule} from 'primeng/rating';
import { UserpharmacyComponent } from './userpharmacy/userpharmacy.component';
import { UserpathologyComponent } from './userpathology/userpathology.component';
import { EditpatientprofileComponent } from './editpatientprofile/editpatientprofile.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';



@NgModule({
  declarations: [DoctorsComponent, SingledoctorComponent, DoctorappointmentComponent, PatientappointmentComponent, PatientprofileComponent, PharmacyComponent, PathologyComponent, UserpharmacyComponent, UserpathologyComponent, EditpatientprofileComponent, ViewappointmentComponent, ViewprescriptionComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ConfirmDialogModule,
    ButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    TagModule,
    RatingModule,
   

  ],
  providers: [MessageService,ConfirmationService,DatePipe],
})
export class PatientModule { }
