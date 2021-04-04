import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Patient } from './patient';
import { PatientprofileService } from './patientprofile.service';

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {
  isLog: boolean = false
  dtOptions: DataTables.Settings = {};
  patientForm:FormGroup
  listcities:{}
  id=0
  getpatientUserId:Patient
  phoneno:String
  cityid:number
  pincode:number
  listuserPatint:{}
  constructor(private route:ActivatedRoute,public patientService : PatientprofileService,private rut: Router,public userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {

     this.userdataservice.user.userId;

    this.patientService.getpatientByid(this.userdataservice.user.userId).then(res => {

      this.getpatientUserId = res.data;
      
      this.cityid = this.getpatientUserId.cityid
   
       
      this.patientForm = new FormGroup({
        patientname:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        phoneno: new FormControl('',Validators.required),
        email:new FormControl('',Validators.required),
        age:new FormControl('',Validators.required),
        cityid:new FormControl(this.cityid,Validators.required),
        pincode:new FormControl(this.getpatientUserId.pincode,Validators.required),
        userId:new FormControl(this.userdataservice.user.userId,Validators.required),
        // roleid: new FormControl(2,Validators.required)
      })
    })

    this.patientService.listUserPatient(this.userdataservice.user.userId).then(res => {
      this.listuserPatint = res.data;
      console.log("List User Patient ==>  ",res.data);
      
    })

    

    // this.patientService.listcities().then(res => {
    //   this.listcities = res.data;
    // })

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
  submit(){
    this.patientService.addPatientProfile(this.patientForm.value).subscribe(res => {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Patient Child Added Successfully...!!" });
      
    })
    console.log(this.patientForm.value);
    
  }

}
