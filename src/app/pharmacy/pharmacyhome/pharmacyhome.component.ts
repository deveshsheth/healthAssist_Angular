import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-pharmacyhome',
  templateUrl: './pharmacyhome.component.html',
  styleUrls: ['./pharmacyhome.component.css']
})
export class PharmacyhomeComponent implements OnInit {
  isLog: boolean = false
  listPharmacy:{}
  pharmacyForm:FormGroup
  listUserPharmacy:{}
  listcities:{}
  editUserPharmacy:FormGroup
  editPharmacyData:Pharmacy
  constructor(private confirmationService : ConfirmationService,private pharmacyService : PharmacyService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {
    this.pharmacyService.listPharmacy().then(res => {
      this.listPharmacy = res.data;
    })
    this.pharmacyService.listcities().then(res => {
      this.listcities = res.data;
    })
    this.pharmacyService.listUserPharmacy(this.userdataservice.user.userId).then(res => {
      this.listUserPharmacy = res.data;
      console.log(res.data);
      
    })

    this.editUserPharmacy = new FormGroup({
      userid:new FormControl(this.userdataservice.user.userId,Validators.required),
      pharmacyname:new FormControl('',Validators.required),
      timing:new FormControl('',Validators.required),
      phoneno:new FormControl('',Validators.required),
      rating:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      about:new FormControl('',Validators.required),
      cityid:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required)
    })

    this.pharmacyForm = new FormGroup({
      userid:new FormControl(this.userdataservice.user.userId,Validators.required),
      pharmacyid:new FormControl('',Validators.required)
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
  submit(){
    this.pharmacyService.addPharmacy(this.pharmacyForm.value).subscribe(res => {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
    })
    this.rut.navigateByUrl('pharmacyhome')
    console.log(this.pharmacyForm.value);
    
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.pharmacyService.deleteUserPharmacy(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
        })
        this.rut.navigateByUrl('pharmacyhome')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
