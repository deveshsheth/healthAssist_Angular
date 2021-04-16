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
  editFamiltMemberForm:FormGroup
  listcities:{}
  id=0
  getpatientUserId:Patient
  getFamilyMemberId:Patient
  phoneno:String
  cityid:number
  pincode:number
  listuserPatient:{}
  patientid =0
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
      })
    })


    this.patientid = this.route.snapshot.params.patientid
    console.log(this.patientid);
    
    this.patientService.getFamilyMember(this.patientid).then(res => {

      this.getFamilyMemberId= res.data;

      this.patientForm = new FormGroup({
        patientid:new FormControl(this.getFamilyMemberId.patientid,Validators.required),
        patientname:new FormControl(this.getFamilyMemberId.patientname,Validators.required),
        gender:new FormControl(this.getFamilyMemberId.gender,Validators.required),
        phoneno: new FormControl(this.getFamilyMemberId.phoneno,Validators.required),
        email:new FormControl(this.getFamilyMemberId.email,Validators.required),
        age:new FormControl(this.getFamilyMemberId.age,Validators.required),
        userId:new FormControl(this.userdataservice.user.userId,Validators.required),
      })

    })

    this.patientService.listUserPatient(this.userdataservice.user.userId).then(res => {
      this.listuserPatient = res.data;
      console.log("List User Patient ==>  ",res.data);
      
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
  submit(){
    if(this.patientid){
      this.patientService.updateFamilyMember(this.patientForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      })
      console.log("edit profile",this.patientForm.value);
      
    }else{
      this.patientService.addFamilyMember(this.patientForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
          
        })
        console.log(this.patientForm.value);
        
    }
    
  }

}
