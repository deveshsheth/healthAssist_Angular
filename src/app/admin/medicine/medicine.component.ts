import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Medicine } from './medicine';
import { MedicineService } from './medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  medicineForm:FormGroup
  editmedicineForm:FormGroup
  listMedicine:{}
  medicineData:Medicine;
  id=0;
  constructor(private confirmationService :ConfirmationService,private route:ActivatedRoute,private medicineService : MedicineService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    
  this.id = this.route.snapshot.params.medicineid;
  console.log(this.id);
  this.medicineService.getMedicineByid(this.id).then(res => {
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


    this.medicineService.listMedicine().then(res => {
      this.listMedicine = res.data;
    })

    
    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }
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
  submit(){
    if(this.id){
      this.medicineService.updateMedicine(this.medicineForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
        this.rut.navigateByUrl('medicine')
      })
    }else {
      this.medicineService.addMedicine(this.medicineForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })
    }
    
    
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.medicineService.deleteMedicine(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
        
        })
        this.rut.navigateByUrl('disease')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
