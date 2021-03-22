import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';
import { PathologydetailsComponent } from './pathologydetails/pathologydetails.component';
import { PathologyhomeComponent } from './pathologyhome/pathologyhome.component';

const routes: Routes = [
  {path:'pathologyhome',component:PathologyhomeComponent,canActivate:[AuthguardGuard]},
  {path:'pathologydetails/:pathologyId',component:PathologydetailsComponent,canActivate:[AuthguardGuard]},
  {path:'edituserpathology/:pathologyId',component:PathologyhomeComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologyRoutingModule { }
