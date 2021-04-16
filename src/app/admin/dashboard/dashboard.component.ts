import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { ClinicService } from '../clinic/clinic.service';
import { DoctorService } from '../doctor/doctor.service';
import { PathologyService } from '../pathology/pathology.service';
import { PatientService } from '../patient/patient.service';
import { PharmacyService } from '../pharmacy/pharmacy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLog:boolean = false
  doctors:{};
  doctorCount:number = 0
  pathologyCount:number = 0
  pharmacyCount:number = 0
  patientCount:number = 0
  clinicCount:number = 0
  kycDoctor:number = 0
  activeDoctor:number = 0
  pendingDoctor:number = 0
  pauseDoctor:number = 0
  countDoctorClinic:number = 0
  listDoctClinic:{}
  doneAppointmentForAllDoctor:number=0
  constructor(private clinicService : ClinicService,private patientService : PatientService,private pharmacyService : PharmacyService,private pathologyService : PathologyService,private doctorService : DoctorService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit(){
    
    this.doctorService.listdoctor().then(res => {
      this.doctorCount = res.data.length; 
    })

    this.pathologyService.listpathology().then(res => {
      this.pathologyCount = res.data.length;
    })

    this.pharmacyService.listpharmacy().then(res => {
      this.pharmacyCount = res.data.length;
    })

    this.patientService.listpatient().then(res => {
      this.patientCount = res.data.length;
    })

    this.clinicService.listClinic().then(res =>{
      this.clinicCount = res.data.length;
    })


    this.doctorService.kycDoctor().then(res => {
      this.kycDoctor = res.data.length;
    })

    
    this.doctorService.activeDoctor().then(res => {
      this.activeDoctor = res.data.length;
    })

    
    this.doctorService.pendingDoctor().then(res => {
      this.pendingDoctor = res.data.length;
    })

    
    this.doctorService.pauseDoctor().then(res => {
      this.pauseDoctor = res.data.length;
    })

    this.doctorService.doneAppointmentForAllDoctor().then(res => {
      this.doneAppointmentForAllDoctor = res.data.length;
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
