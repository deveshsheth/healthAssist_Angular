import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Diet } from 'src/app/admin/diet/diet';
import { DietService } from 'src/app/admin/diet/diet.service';
import { UserserviceService } from 'src/app/signup-login/userservice.service';

@Component({
  selector: 'app-doctordiet',
  templateUrl: './doctordiet.component.html',
  styleUrls: ['./doctordiet.component.css']
})
export class DoctordietComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  dietForm:FormGroup
  listDiet:{}
  id = 0;
  dietdata: Diet;
  constructor(private route: ActivatedRoute,private confirmationService : ConfirmationService,private dietService : DietService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.dietService.listDiet().then(res => {
      this.listDiet = res.data;
    })
    this.dietForm = new FormGroup({
      diettype:new FormControl('',Validators.required),
      dietcontent:new FormControl('',Validators.required),
      agegroup:new FormControl('',Validators.required)
    })

    this.id = this.route.snapshot.params.dietid;

    console.log(this.route.snapshot.params.userId);

    this.dietService.getDietByid(this.id).then(res => {

      this.dietdata = res.data;

      this.dietForm = new FormGroup({
        dietid: new FormControl(this.dietdata.dietid, Validators.required),
        diettype: new FormControl(this.dietdata.diettype, Validators.required),
        dietcontent: new FormControl(this.dietdata.dietcontent, Validators.required),
        agegroup: new FormControl(this.dietdata.agegroup, Validators.required)
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
    this.dietdata = this.dietForm.value;
    if(this.id){
      this.dietService.updateDiet(this.dietForm.value).subscribe(res => {
        this.rut.navigateByUrl('doctordiet')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }else {
      this.dietService.addDiet(this.dietForm.value).subscribe(res => {
        this.rut.navigateByUrl('doctordiet')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }
    
    
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dietService.deleteDiet(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
          this.rut.navigateByUrl('doctordiet')
        })
        
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
