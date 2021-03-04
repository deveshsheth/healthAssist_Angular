import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { PharmacyService } from './pharmacy.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  pharmacylist: {}
  value1: number = 0
  isLog: boolean = false
  constructor(private confirmationService: ConfirmationService, private userdataservice: UserserviceService, private rut: Router, private service: PharmacyService, private messageService: MessageService) { }

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
        this.service.listpharmacy().then(res => {
          this.pharmacylist = res.data;
          console.log(res.data);
        })
        clearInterval(interval);
      }
    }, 200);

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
  delete(value) {


    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.service.deletepharmacy(value).subscribe(res => {
          console.log("pharmacy deleted....");
        })
        this.rut.navigateByUrl('pharmacy')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
    
  }
 

}
