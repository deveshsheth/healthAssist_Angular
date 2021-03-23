import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  isLog:boolean = false
  listAppointment:{}
  dtOptions: DataTables.Settings = {};
  statusid=0
  Appointment:{}
  constructor(private appointmentService : AppointmentService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.appointmentService.listAppointment(this.userdataservice.user.userId).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);
      
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

  accept(value){
    console.log(value);
    this.Appointment={"appointmentid":value,"statusid":this.statusid=1}
    this.appointmentService.acceptrejectappointment(this.Appointment).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Appointment Status Updated..!!"});
    })
    this.rut.navigateByUrl('appointment')
    
  }
  reject(value){
    console.log(value);
    this.Appointment={"appointmentid":value,"statusid":this.statusid=2}
    this.appointmentService.acceptrejectappointment(this.Appointment).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Appointment Status Updated..!!"});
    })
    this.rut.navigateByUrl('appointment')
  }
  
}
