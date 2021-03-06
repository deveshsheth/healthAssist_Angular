import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupLoginRoutingModule } from './signup-login-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';







@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    MDBBootstrapModule.forRoot(),
    SignupLoginRoutingModule,
    
  ]
})
export class SignupLoginModule { }
