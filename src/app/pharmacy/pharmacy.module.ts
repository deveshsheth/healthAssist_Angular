import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyhomeComponent } from './pharmacyhome/pharmacyhome.component';
import { PharmacydetailsComponent } from './pharmacydetails/pharmacydetails.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [PharmacyhomeComponent, PharmacydetailsComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ConfirmDialogModule,
    ButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    TagModule,
    RatingModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class PharmacyModule { }
