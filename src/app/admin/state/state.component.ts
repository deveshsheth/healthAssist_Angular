import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { State } from './state';
import { StateService } from './state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  isLog: boolean = false
  dtOptions: DataTables.Settings = {};
  liststates:{}
  getStateData: State
  id = 0
  stateForm: FormGroup
  value1:number = 0
  constructor(private stateService: StateService, private confirmationService: ConfirmationService, private route: ActivatedRoute, public userdataservice: UserserviceService, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {
    
    let interval = setInterval(() => {
      this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
      if (this.value1 >= 100) {
        this.value1 = 100;
        this.stateService.listStates().then(res => {
          this.liststates = res.data;
        })
        clearInterval(interval);
      }
    }, 20);

    this.id = this.route.snapshot.params.stateid;
    this.stateService.getStateByid(this.id).then(res => {
      this.getStateData = res.data;

      this.stateForm = new FormGroup({
        stateid: new FormControl(this.getStateData.stateid, Validators.required),
        statename: new FormControl(this.getStateData.statename, Validators.required)
      })
    })

    this.stateForm = new FormGroup({
      statename: new FormControl('', Validators.required)
    })

    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }
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
  submit(){
    if(this.id){
      this.stateService.updateState(this.stateForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
     
    }else {
      this.stateService.addStates(this.stateForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
    }
    
    this.rut.navigateByUrl('state')
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.stateService.deleteState(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
        
        })
        this.rut.navigateByUrl('state')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
