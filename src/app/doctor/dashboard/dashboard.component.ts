import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { AppointmentService } from '../appointment/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLog:boolean = false
  todayAppointmentCount:number = 0
  waitForAcceptCount:number = 0
  acceptCount:number = 0
  rescheduleCount:number = 0
  doneCount:number = 0
  userId = 0
  listDoctClinic:number =0
  constructor(private service : AppointmentService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.userId = this.userdataservice.user.userId

    this.service.todayAppointment(this.userId).then(res => {
      this.todayAppointmentCount = res.data.length
    })

    this.service.waitForAcceptAppointment(this.userId).then(res => {
      this.waitForAcceptCount = res.data.length
    })

    this.service.acceptAppointment(this.userId).then(res => {
      this.acceptCount = res.data.length
    })

    this.service.rescheduleAppointment(this.userId).then(res => {
      this.rescheduleCount = res.data.length
    })

    this.service.doneAppointment(this.userId).then(res => {
      this.doneCount = res.data.length
    })

    this.service.listDoctClinic(this.userId).then(res => {
      this.listDoctClinic = res.data.length
    })

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
