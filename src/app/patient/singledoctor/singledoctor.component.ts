import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/admin/doctor/doctor';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { UserdoctorsService } from '../doctors/userdoctors.service';

@Component({
  selector: 'app-singledoctor',
  templateUrl: './singledoctor.component.html',
  styleUrls: ['./singledoctor.component.css']
})
export class SingledoctorComponent implements OnInit {
  isLog: boolean = false
  getDoctorUserId:Doctor;
  id = 0;
  dtOptions: DataTables.Settings = {};
  listDoctClinic:{};
  constructor(private route : ActivatedRoute,private userdoctorService : UserdoctorsService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.userId;

    this.userdoctorService.listDoctClinic(this.id).then(res => {
      this.listDoctClinic = res.data;
      console.log(res.data);
      
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
   

    this.userdoctorService.getdoctorByid(this.id).then(res => {
      this.getDoctorUserId = res.data;
      console.log(res);
      console.log(this.getDoctorUserId);
      
      

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
