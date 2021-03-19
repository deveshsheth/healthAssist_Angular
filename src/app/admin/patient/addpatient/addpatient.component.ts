import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Password } from 'primeng/password';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  isLog: boolean = false
  listcities:{}
  patientForm:FormGroup;
  constructor(private rut : Router,public userdataservice: UserserviceService,private patientservice: PatientService, private messageService: MessageService) { }

  ngOnInit() {
    this.patientservice.listcities().then(res => {
      this.listcities = res.data;
    })

    this.patientForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      // patientname:new FormControl('',Validators.required),
      phoneno: new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required),
      cityid:new FormControl('',Validators.required),
      roleid: new FormControl(2,Validators.required)
    })
    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
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
  submit()
  {
    this.patientservice.addpatient(this.patientForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      this.rut.navigateByUrl('patient')
    })
    console.log(this.patientForm.value);
    
  }

}
