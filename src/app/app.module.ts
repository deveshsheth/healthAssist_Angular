import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupLoginModule } from './signup-login/signup-login.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab    
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import {ButtonModule} from 'primeng/button';
import { AdminModule } from './admin/admin.module';
import { DoctorModule } from './doctor/doctor.module';
import { PathologyModule } from './pathology/pathology.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {TableModule} from 'primeng/table';
import { DataTablesModule } from "angular-datatables";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ForgotpasswordComponent,

    NewpasswordComponent,
    AboutusComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    SignupLoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    ToastModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ButtonModule,
    AdminModule,
    DoctorModule,
    PathologyModule,
    PharmacyModule,
    SignupLoginModule,
    TableModule,
    DataTablesModule,
    ConfirmDialogModule
  
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent,ConfirmationService]
})
export class AppModule { }
