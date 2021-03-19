import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { PathologyService } from './pathology.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  pathologylist:{}
  value1 : number=0
  isLog: boolean = false
  constructor(private confirmationService: ConfirmationService,public userdataservice: UserserviceService,private service : PathologyService,private rut : Router,private messageService : MessageService) { }

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
        this.service.listpathology().then(res => {
          this.pathologylist = res.data;
          console.log(res.data);
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
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.service.deletepathology(value).subscribe(res => {
          console.log("pathology deleted....");
        })
        this.rut.navigateByUrl('pathology')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }


}
