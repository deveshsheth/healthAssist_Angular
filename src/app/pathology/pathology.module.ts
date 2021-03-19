import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologyRoutingModule } from './pathology-routing.module';
import { PathologyhomeComponent } from './pathologyhome/pathologyhome.component';
import { PathologydetailsComponent } from './pathologydetails/pathologydetails.component';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [PathologyhomeComponent, PathologydetailsComponent],
  imports: [
    CommonModule,
    PathologyRoutingModule,
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
export class PathologyModule { }
