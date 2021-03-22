import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PatientService } from 'src/app/admin/patient/patient.service';
import { Patient } from 'src/app/patient/patientprofile/patient';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment/appointment.service';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  id=0
  PrescriptionData:{}
  constructor(private route : ActivatedRoute,public userdataservice : UserserviceService,private Service:AppointmentService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.appointmentid;
    console.log(this.id);
    
    this.Service.listAppointment(this.userdataservice.user.userId).then(res => {

      this.PrescriptionData = res.data;
      console.log("presription Details...",res.data);
      console.log(this.PrescriptionData);
      
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }
  }
  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }

}
