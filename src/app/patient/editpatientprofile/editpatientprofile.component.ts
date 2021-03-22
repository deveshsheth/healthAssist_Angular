import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Users } from 'src/app/admin/users/users';
import { UsersService } from 'src/app/admin/users/users.service';
import { EditprofileComponent } from 'src/app/doctor/profile/editprofile/editprofile.component';
import { UserserviceService } from 'src/app/signup-login/userservice.service';

@Component({
  selector: 'app-editpatientprofile',
  templateUrl: './editpatientprofile.component.html',
  styleUrls: ['./editpatientprofile.component.css']
})
export class EditpatientprofileComponent implements OnInit {
  edituserForm:FormGroup;
  isLog:boolean = false
  id=0;
  userData:Users;
  constructor(private Service : EditprofileComponent,private route : ActivatedRoute,private confirmationService: ConfirmationService,private service : UsersService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService,private Userservice : UsersService) { }

  ngOnInit() {
    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }
    this.id = this.route.snapshot.params.userId;
    this.Userservice.getUserByid(this.id).then(res => {
      this.userData = res.data;
    
    this.edituserForm = new FormGroup({
      userId:new FormControl(this.userData.userId,Validators.required),
      firstname:new FormControl(this.userData.firstname,Validators.required),
      lastname:new FormControl(this.userData.lastname,Validators.required),
      email:new FormControl(this.userData.email,Validators.required),
      password:new FormControl(this.userData.password,Validators.required),
      gender:new FormControl(this.userData.gender,Validators.required),
    })
  })

  }
  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }
  submit(){
    this.userData = this.edituserForm.value;
    if(this.id){

      this.service.updateUser(this.edituserForm.value).subscribe(res => {
        console.log(res);
        
        this.rut.navigateByUrl('doctors')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }
  }

}
