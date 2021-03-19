import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  doctorForm:FormGroup;
  isLog:boolean = false
  constructor(public userdataservice : UserserviceService,private service : DoctorService, private messageService: MessageService, private rut: Router) { }

  ngOnInit() {

    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }

    this.doctorForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      qualification: new FormControl('',Validators.required),
      specialization: new FormControl('',Validators.required),
      experience : new FormControl('',Validators.required),
      about : new FormControl('',Validators.required),
      registrationNo : new FormControl('',Validators.required),
      roleid: new FormControl(3,Validators.required)
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
    console.log(this.doctorForm.value);
    
    this.service.adddoctor(this.doctorForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      console.log(res);
      this.rut.navigateByUrl('doctor')
    })
    
    
  }
}
