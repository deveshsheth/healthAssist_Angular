import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { AdminappointmentService } from './adminappointment.service';

@Component({
  selector: 'app-adminappointment',
  templateUrl: './adminappointment.component.html',
  styleUrls: ['./adminappointment.component.css']
})
export class AdminappointmentComponent implements OnInit {
  isLog: boolean = false
  dtOptions: DataTables.Settings = {};
  listAllAppointment:{}
  constructor(private service : AdminappointmentService,private route: ActivatedRoute, public userdataservice: UserserviceService, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {

    this.service.listAllAppointment().then(res =>{
      this.listAllAppointment = res.data;
    })

    if(this.userdataservice.user.email.length != 0) {

      this.isLog = true;
    
    } else {
      this.isLog = false;
    }
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }

  logout() {
    this.userdataservice.user = null
    console.log("logout successfully...!!");
  
    this.isLog = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Logout Successfully...!!" });
    this.rut.navigateByUrl('');
  }

}
