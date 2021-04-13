import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Appointment } from '../appointment';
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
  RescheduleForm:FormGroup
  appointmentid =0
  appointmentData:Appointment
  constructor(private route : ActivatedRoute,private appointmentService : AppointmentService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.appointmentid = this.route.snapshot.params.appointmentid
  console.log("Appointment ID => ",this.appointmentid);
  
  this.appointmentService.getAppointmentByid(this.appointmentid).then(res => {
    this.appointmentData = res.data;
    this.RescheduleForm = new FormGroup({
      appointmentid:new FormControl(this.appointmentData.appointmentid,Validators.required),
      email:new FormControl(this.appointmentData.email,Validators.required),
      statusreason:new FormControl('',Validators.required)
    })
  })

    this.appointmentService.listAppointment(this.userdataservice.user.userId).then(res => {
      this.listAppointment = res.data;

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
  }


  submit(){
    
    if(this.appointmentid){

      this.appointmentService.updateRescheduleAppointment(this.RescheduleForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })

      this.appointmentService.rescheduleReason(this.RescheduleForm.value).subscribe(res => {
      
        if(res.status == 200){
          this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});
          this.rut.navigateByUrl("appointment");
        }else{
          this.messageService.add({severity:'error', summary: 'Error', detail: res.msg});
        }
      })
      this.rut.navigateByUrl('appointment')
      
    }
    
  }
  
}
