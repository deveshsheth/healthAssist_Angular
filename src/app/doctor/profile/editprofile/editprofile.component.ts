import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/admin/doctor/doctor';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  isLog:boolean = false
  editProfileForm:FormGroup
  DoctorProfileData : Doctor
  hide:true
  constructor(public profileService : ProfileService ,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {

    this.profileService.getDoctorProfileById(this.userdataservice.user.userId).then(res => {
      this.DoctorProfileData = res.data;
      console.log(res.data);

      this.editProfileForm = new FormGroup({
        userId:new FormControl(this.userdataservice.user.userId,Validators.required),
        firstname:new FormControl(this.DoctorProfileData.firstname,Validators.required),
        lastname:new FormControl(this.DoctorProfileData.lastname,Validators.required),
        email:new FormControl(this.DoctorProfileData.email,Validators.required),
        password:new FormControl(this.DoctorProfileData.password,Validators.required),
        gender:new FormControl(this.DoctorProfileData.gender,Validators.required),
        specialization:new FormControl(this.DoctorProfileData.specialization,Validators.required),
        qualification:new FormControl(this.DoctorProfileData.qualification,Validators.required),
        experience:new FormControl(this.DoctorProfileData.experience,Validators.required),
        about:new FormControl(this.DoctorProfileData.about,Validators.required)
      })
      
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
  submit(){
    if(this.userdataservice.user.userId){
      this.profileService.updateDoctor(this.editProfileForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Profile Updated...!!"});

      })
      this.rut.navigateByUrl('profile')
    }
  }
  

}
