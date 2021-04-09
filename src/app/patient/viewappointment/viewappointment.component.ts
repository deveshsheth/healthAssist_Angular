import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { ViewappointmentService } from './viewappointment.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {
  isLog: boolean = false
  listAppointment:{}
  dtOptions: DataTables.Settings = {};
  statusid=0
  Appointment:{}
  userId = 0
  RescheduleForm:FormGroup
  constructor(private viewAppointmentService : ViewappointmentService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {

   this.userId =  this.userdataservice.user.userId
    this.viewAppointmentService.viewPatientAppointment(this.userId).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);
    })

    this.RescheduleForm = new FormGroup({
      appointmentdate:new FormControl('',Validators.required),
      appointmenttime:new FormControl('',Validators.required)
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    
    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }
  }
  logout() {
    this.userdataservice.user = null
    console.log("logout successfully...!!");

    this.isLog = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Logout Successfully...!!" });
    this.rut.navigateByUrl('');
  }

  RescheduleSubmit(){
    console.log(this.RescheduleForm.value);
    
  }

}
