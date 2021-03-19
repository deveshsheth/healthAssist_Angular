import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { ClinicService } from '../clinic.service';

@Component({
  selector: 'app-addclinic',
  templateUrl: './addclinic.component.html',
  styleUrls: ['./addclinic.component.css']
})
export class AddclinicComponent implements OnInit {
  isLog:boolean = false
  listcities:{}
  clinicForm: FormGroup;
  constructor(private service: ClinicService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {

    this.clinicForm = new FormGroup({
      clinicname: new FormControl('', Validators.required),
      timing: new FormControl('', Validators.required),
      phoneno: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      cityid: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required)
    })

    this.service.listcities().then(res => {
      this.listcities = res.data;
    })
    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }
  }

  submit(){
    this.service.addclinic(this.clinicForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      console.log(res.data);
      this.rut.navigateByUrl('clinic')
    })
  }



  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }

}
