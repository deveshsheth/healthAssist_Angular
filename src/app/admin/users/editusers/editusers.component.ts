import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/signup-login/user';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { DoctorStatusService } from '../../doctor/doctor-status.service';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {
  isLog:boolean = false
  listRole:{}
  userForm:FormGroup;
  id=0;
  userData:Users;
  constructor(public doctorStatusService:DoctorStatusService,private route : ActivatedRoute,private confirmationService: ConfirmationService,private service : UsersService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService,private Userservice : UsersService) { }

  ngOnInit() {
    this.Userservice.listRole().then(res => {
      this.listRole = res.data;
      console.log(res.data);
      
    })
    this.id = this.route.snapshot.params.userId;
    this.Userservice.getUserByid(this.id).then(res => {
      this.userData = res.data;
    
    this.userForm = new FormGroup({
      userId:new FormControl(this.userData.userId,Validators.required),
      firstname:new FormControl(this.userData.firstname,Validators.required),
      lastname:new FormControl(this.userData.lastname,Validators.required),
      email:new FormControl(this.userData.email,Validators.required),
      password:new FormControl(this.userData.password,Validators.required),
      gender:new FormControl(this.userData.gender,Validators.required),
      roleid:new FormControl(this.userData.roleid,Validators.required),
      status:new FormControl(this.userData.status,Validators.required)
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
    this.userData = this.userForm.value;
    if(this.id){

      this.service.updateUser(this.userForm.value).subscribe(res => {
        console.log(res);
        
        this.rut.navigateByUrl('users')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }
  }

}
