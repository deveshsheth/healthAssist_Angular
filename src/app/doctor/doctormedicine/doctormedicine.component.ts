import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Medicine } from 'src/app/admin/medicine/medicine';
import { MedicineService } from 'src/app/admin/medicine/medicine.service';
import { UserserviceService } from 'src/app/signup-login/userservice.service';

@Component({
  selector: 'app-doctormedicine',
  templateUrl: './doctormedicine.component.html',
  styleUrls: ['./doctormedicine.component.css']
})
export class DoctormedicineComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  listMedicine:{}
  medicineForm:FormGroup
  medicineData:Medicine;
  id=0;
  constructor(private confirmationService :ConfirmationService,private route:ActivatedRoute,private Service : MedicineService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.Service.listMedicine().then(res => {
      this.listMedicine = res .data;
    })

    this.id = this.route.snapshot.params.medicineid;
  this.Service.getMedicineByid(this.id).then(res => {
    this.medicineData = res.data;
    
    
    this.medicineForm = new FormGroup({
      medicineid:new FormControl(this.medicineData.medicineid,Validators.required),
      medicinename:new FormControl(this.medicineData.medicinename,Validators.required),
      medicinetype:new FormControl(this.medicineData.medicinetype,Validators.required)
    })

  })


    this.medicineForm = new FormGroup({
      medicinename:new FormControl('',Validators.required),
      medicinetype:new FormControl('',Validators.required)
    })

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
  submit(){
    if(this.id){
      this.Service.updateMedicine(this.medicineForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
        this.rut.navigateByUrl('doctormedicine')
      })
    }else {
      this.Service.addMedicine(this.medicineForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })
      this.rut.navigateByUrl('doctormedicine')
    }
    
    
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.Service.deleteMedicine(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
        
        })
        this.rut.navigateByUrl('doctormedicine')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
