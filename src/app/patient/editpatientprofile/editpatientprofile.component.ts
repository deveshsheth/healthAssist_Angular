import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Users } from 'src/app/admin/users/users';
import { UsersService } from 'src/app/admin/users/users.service';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { EditpatientprofileService } from './editpatientprofile.service';

@Component({
  selector: 'app-editpatientprofile',
  templateUrl: './editpatientprofile.component.html',
  styleUrls: ['./editpatientprofile.component.css']
})
export class EditpatientprofileComponent implements OnInit {
  editPatientForm:FormGroup;
  isLog:boolean = false
  id=0;
  userData:Users;
  listcities:{}
  constructor(private Service : EditpatientprofileService,
    private route : ActivatedRoute,
    private confirmationService: ConfirmationService,
    public userdataservice : UserserviceService,
    private rut : Router,
    private messageService : MessageService,
    private Userservice : UsersService) { }

  ngOnInit() {
    this.Service.listcities().then(res => {
      this.listcities = res.data;
    })

    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }
    // this.id = this.route.snapshot.params.userId;
    // this.Userservice.getUserByid(this.id).then(res => {
    //   this.userData = res.data;
    
    this.editPatientForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
       //patientname:new FormControl('',Validators.required),
      phoneno: new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required),
      cityid:new FormControl('',Validators.required),
      roleid: new FormControl(2,Validators.required)
    })
  // })

  }
  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }
  submit(){
    // this.userData = this.edituserForm.value;
    // if(this.id){

    //   this.service.updateUser(this.edituserForm.value).subscribe(res => {
    //     console.log(res);
        
    //     this.rut.navigateByUrl('patientprofile')
    //     this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
    //   })
    // }
    console.log(this.editPatientForm.value);
    
  }

}
