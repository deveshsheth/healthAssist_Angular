import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/admin/doctor/doctor';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLog:boolean = false
  DoctorProfileData : Doctor
  constructor(public profileService : ProfileService ,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.profileService.getDoctorProfileById(this.userdataservice.user.userId).then(res => {
      this.DoctorProfileData = res.data;
      console.log(res.data);
      
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
