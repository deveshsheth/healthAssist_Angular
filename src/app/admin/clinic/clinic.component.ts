import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { ClinicService } from './clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  listClinic:{}
  constructor(private confirmationService: ConfirmationService,private service : ClinicService,private userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {

    this.service.listClinic().then( res => {
      this.listClinic = res.data;
    })


    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
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
  delete(value) {


    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.service.deleteClinic(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
          console.log("Clinic deleted....");
        })
        this.rut.navigateByUrl('clinic')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
    
  }

}
