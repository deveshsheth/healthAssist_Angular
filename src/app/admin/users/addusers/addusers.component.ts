import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  isLog:boolean = false
  listRole:{}
  userForm:FormGroup;
  constructor(private confirmationService: ConfirmationService,private service : UsersService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService,private Userservice : UsersService) { }

  ngOnInit() {
    this.Userservice.listRole().then(res => {
      this.listRole = res.data;
      console.log(res.data);
      
    })

    this.userForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      roleid:new FormControl('',Validators.required),
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
    this.Userservice.adduser(this.userForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      this.rut.navigateByUrl('users')
    })
    
    
  }

}
