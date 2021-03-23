import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Disease } from 'src/app/admin/disease/disease';
import { DiseaseService } from 'src/app/admin/disease/disease.service';
import { UserserviceService } from 'src/app/signup-login/userservice.service';

@Component({
  selector: 'app-doctordisease',
  templateUrl: './doctordisease.component.html',
  styleUrls: ['./doctordisease.component.css']
})
export class DoctordiseaseComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  id=0
  diseaseForm:FormGroup
  listDisease:{}
  diseaseData:Disease
  constructor(private confirmationService : ConfirmationService,private route : ActivatedRoute,private Service : DiseaseService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.Service.listDisease().then(res => {
      this.listDisease = res.data;
    })

    this.diseaseForm = new FormGroup({
      diseasename : new FormControl('',Validators.required),
    })
    this.id = this.route.snapshot.params.diseaseid;
    this.Service.getDiseaseByid(this.id).then(res => {
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
      this.Service.updateDisease(this.diseaseForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })
      this.rut.navigateByUrl('doctordisease')
    }else {
      this.Service.addDisease(this.diseaseForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })
      this.rut.navigateByUrl('doctordisease')
    }
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.Service.deleteDisease(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
        
        })
        this.rut.navigateByUrl('doctordisease')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
