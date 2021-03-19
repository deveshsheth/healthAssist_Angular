import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Doctor } from './doctor';
import { DoctorStatusService } from './doctor-status.service';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listdoctor:{}
  value1: number = 0
  isLog: boolean = false
  constructor(
    private confirmationService: ConfirmationService,
    public userdataservice: UserserviceService,
    private rut: Router,
    private service: DoctorService,
    private messageService : MessageService,
    public doctorStatusService:DoctorStatusService) { }

  async ngOnInit() {

    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }

    let interval = setInterval(() => {
      this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
      if (this.value1 >= 100) {
        this.value1 = 100;
        this.service.listdoctor().then(res => {
          this.listdoctor = res.data;
          console.log(res);
    
        })

        clearInterval(interval);
      }
    }, 20);

    

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
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.service.deletedoctor(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
          console.log("Doctor deleted....");
        })
        this.rut.navigateByUrl('doctor')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }


}
