import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { DoctorappointmentService } from './doctorappointment.service';

@Component({
  selector: 'app-doctorappointment',
  templateUrl: './doctorappointment.component.html',
  styleUrls: ['./doctorappointment.component.css']
})
export class DoctorappointmentComponent implements OnInit {
  isLog: boolean = false
  listDoctClinic:{};
  userid = 0;
  currentDate = new Date();
  listuserPatint:{}
  constructor(private route : ActivatedRoute,private service : DoctorappointmentService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {

    this.userid = this.route.snapshot.params.userId;

    this.service.listUserPatient(this.userdataservice.user.userId).then(res => {
      this.listuserPatint = res.data;
    })

    this.service.listDoctClinic(this.userid).then(res => {
      this.listDoctClinic = res.data;
      console.log(res.data);
      
    })
    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }
  }
  logout() {
    this.userdataservice.user = null
    console.log("logout successfully...!!");

    this.isLog = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Logout Successfully...!!" });
    this.rut.navigateByUrl('');
  }

}
