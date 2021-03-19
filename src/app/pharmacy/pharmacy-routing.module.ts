import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';
import { PharmacydetailsComponent } from './pharmacydetails/pharmacydetails.component';
import { PharmacyhomeComponent } from './pharmacyhome/pharmacyhome.component';

const routes: Routes = [
  {path:'pharmacyhome',component:PharmacyhomeComponent,canActivate:[AuthguardGuard]},
  {path:'pharmacydetails/:pharmacyId',component:PharmacydetailsComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
