import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  id = 0;
  listdoctor:{};
  listclinic:{};
  listDoctClinic:{};
  getDoctorUserId:Doctor;
  doctClinicForm:FormGroup;
  constructor(private confirmationService: ConfirmationService,private route : ActivatedRoute,private service: DoctorService,private userdataservice : UserserviceService,private rut:Router,private messageService : MessageService) { }

  ngOnInit() {

    


    this.id = this.route.snapshot.params.userId;

    this.service.getdoctorByid(this.id).then(res => {
      this.getDoctorUserId = res.data;
      console.log(res);
      console.log(this.getDoctorUserId);
      
      this.doctClinicForm = new FormGroup({
        docid:new FormControl(this.getDoctorUserId.userId,Validators.required),
        clinicid:new FormControl('',Validators.required),
        monday:new FormControl('',Validators.required),
        tuesday:new FormControl('',Validators.required),
        wednesday:new FormControl('',Validators.required),
        thrusday:new FormControl('',Validators.required),
        friday:new FormControl('',Validators.required),
        saturday:new FormControl('',Validators.required),
        sunday:new FormControl('',Validators.required),
        threshold:new FormControl('',Validators.required)
      })

    })

    this.service.listClinic().then(res => {
      this.listclinic = res.data;
    })
    this.service.listDoctClinic().then(res => {
      this.listDoctClinic = res.data;
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

  submit(){
    this.service.addDoctClinic(this.doctClinicForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      console.log(res.data);
    })
    
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        this.service.deletedoctclinic(value).subscribe(res => {
          console.log("Doctor CLinic deleted....");
        })
        // this.rut.navigateByUrl('profile')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
