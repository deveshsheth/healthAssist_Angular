import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { PatientappointmentService } from './patientappointment.service';

@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.css'],
  providers: [DatePipe]

})
export class PatientappointmentComponent implements OnInit {
  isLog: boolean = false
  listClinic:{}
  listDoctor:{}
  currentDate = new Date();
  appointmentForm:FormGroup;
  today: number = Date.now();
  myDate = new Date();
  listuserPatint:{}
  a:string=""
  listDoctClinic:{}
  userid=0
  constructor(private route : ActivatedRoute,private datePipe: DatePipe,private service : PatientappointmentService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) {
    this.a = this.datePipe.transform(this.myDate, 'mediumDate');
    
   }

 
  ngOnInit() {
    this.userid = this.route.snapshot.params.userId;

    this.service.listDoctClinic(this.userdataservice.user.userId).then(res => {
      this.listDoctClinic = res.data;
    })
    this.service.listUserPatient(this.userdataservice.user.userId).then(res => {
      this.listuserPatint = res.data;
    })
  
    this.appointmentForm= new FormGroup({
      //patienid:new FormControl(this.userdataservice.user.userId,Validators.required),
      doctorid:new FormControl('',Validators.required),
      clinicid:new FormControl('',Validators.required),
      createdate:new FormControl(this.a,Validators.required),
      appointmentdate:new FormControl('',Validators.required),
      appointmenttime:new FormControl('',Validators.required),
      reference:new FormControl('',Validators.required),
      comment:new FormControl('',Validators.required),
      complain:new FormControl('',Validators.required),
      patientid:new FormControl('',Validators.required)
        })

    this.service.listClinic().then(res => {
      this.listClinic = res.data;
      
    })
    this.service.listdoctors().then(res => {
      this.listDoctor = res.data;
    })
    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }
  }
  logout() {
    this.userdataservice.user = null
    this.isLog = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Logout Successfully...!!" });
    this.rut.navigateByUrl('');
  }
  submit()
  {
    this.service.addAppointment(this.appointmentForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Appointment Booked Successfully...!!"});
    })

    
  }

  getClinicsByDoctId(){
    var docProfileId = this.appointmentForm.value.doctorid 
    //api - boot -> clinics 
    this.service.listDoctClinic(docProfileId).then(res => {
      this.listClinic = res.data;
      
    })
   
    
  }

  getDoctClinicsByDoctId(){
    //var doctclinicid = this.appointmentForm.value.appointmenttime 
    console.log(this.appointmentForm.value.appointmenttime);
    this.service.listDoctClinic(this.userid).then(res => {
      this.listDoctClinic = res.data;
    console.log("list app time"+res.data);
    
    })

    
  }

}
