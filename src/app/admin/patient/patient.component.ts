import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientlist: {};
  dtOptions: DataTables.Settings = {};
  value1: number = 0
  isLog: boolean = false
  constructor(private rut : Router,private userdataservice: UserserviceService,private patientservice: PatientService, private messageService: MessageService) { }

  ngOnInit() {

    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }

    let interval = setInterval(() => {
      this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
      if (this.value1 >= 100) {
        this.value1 = 100;
        this.patientservice.listpatient().then(res => {
          console.log("hello patient...!!");

          this.patientlist = res.data;
          console.log(res.data);

        })
        clearInterval(interval);
      }
    }, 200);


    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }

}
