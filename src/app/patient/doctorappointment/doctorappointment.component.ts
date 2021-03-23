import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/admin/doctor/doctor';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { UserdoctorsService } from '../doctors/userdoctors.service';
import { DoctorappointmentService } from './doctorappointment.service';

@Component({
  selector: 'app-doctorappointment',
  templateUrl: './doctorappointment.component.html',
  styleUrls: ['./doctorappointment.component.css']
})
export class DoctorappointmentComponent implements OnInit {
  isLog: boolean = false
  listDoctClinic:{};
  userid = 0;
  currentDate = new Date();
  listuserPatint:{}
  doctorappointmentForm:FormGroup
  myDate = new Date();
  a:string=""
  getDoctorUserId:Doctor
  constructor(private userdoctorService : UserdoctorsService,private datePipe: DatePipe,private route : ActivatedRoute,private service : DoctorappointmentService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) {
    this.a = this.datePipe.transform(this.myDate, 'mediumDate');

    console.log("current date",this.a);
   }

  ngOnInit() {

    this.userid = this.route.snapshot.params.userId;

    this.service.listUserPatient(this.userdataservice.user.userId).then(res => {
      this.listuserPatint = res.data;
      console.log(res.data);
      
    })

    this.service.listDoctClinic(this.userid).then(res => {
      this.listDoctClinic = res.data;
      console.log(res.data);
      
    })

    this.userdoctorService.getdoctorByid(this.userid).then(res => {
      this.getDoctorUserId = res.data;
      
      this.doctorappointmentForm= new FormGroup({
        doctorid:new FormControl(this.getDoctorUserId.userId,Validators.required),
        clinicid:new FormControl('',Validators.required),
        patientid:new FormControl('',Validators.required),
        createdate:new FormControl(this.a,Validators.required),
        appointmentdate:new FormControl('',Validators.required),
        appointmenttime:new FormControl('',Validators.required),
        reference:new FormControl('',Validators.required),
        comment:new FormControl('',Validators.required),
        complain:new FormControl('',Validators.required),
        
      })

    })

    

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
  submit(){
    this.service.addAppointment(this.doctorappointmentForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Appointment Booked Successfully...!!"});
    })
    console.log(this.doctorappointmentForm.value);
    
  }

}
