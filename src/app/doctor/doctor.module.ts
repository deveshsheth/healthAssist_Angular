import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';

import { AppointmentComponent } from './appointment/appointment.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataTablesModule } from 'angular-datatables';
import { ButtonModule } from 'primeng/button';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DoctormedicineComponent } from './doctormedicine/doctormedicine.component';
import { DoctordiseaseComponent } from './doctordisease/doctordisease.component';
import { DoctordietComponent } from './doctordiet/doctordiet.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [ AppointmentComponent, PrescriptionComponent, ProfileComponent, EditprofileComponent, DashboardComponent, DoctormedicineComponent, DoctordiseaseComponent, DoctordietComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MDBBootstrapModule.forRoot(),
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    ButtonModule,
    DataTablesModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    TagModule,
    MessagesModule,
    MessageModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class DoctorModule { }
