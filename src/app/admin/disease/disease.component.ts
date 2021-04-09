import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Disease } from './disease';
import { DiseaseService } from './disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  listDisease:{}
  diseaseForm:FormGroup
  id=0;
  diseaseData:Disease
  value1:number = 0
  constructor(private diseaseservice : DiseaseService,private confirmationService :ConfirmationService,private route:ActivatedRoute,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
   
    let interval = setInterval(() => {
      this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
      if (this.value1 >= 100) {
        this.value1 = 100;
        this.diseaseservice.listDisease().then(res => {
          this.listDisease = res.data;
        })
        clearInterval(interval);
      }
    }, 20);

    this.diseaseForm = new FormGroup({
      diseasename : new FormControl('',Validators.required),
    })
    this.id = this.route.snapshot.params.diseaseid;
    this.diseaseservice.getDiseaseByid(this.id).then(res => {
      this.diseaseData = res.data;

      this.diseaseForm = new FormGroup({
        diseaseid : new FormControl(this.diseaseData.diseaseid,Validators.required),
        diseasename : new FormControl(this.diseaseData.diseasename,Validators.required),
      })
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
      this.diseaseservice.updateDisease(this.diseaseForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })
      this.rut.navigateByUrl('disease')
    }else {
      this.diseaseservice.addDisease(this.diseaseForm.value).subscribe(res => {
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
        
        this.diseaseservice.deleteDisease(value).subscribe(res => {
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
