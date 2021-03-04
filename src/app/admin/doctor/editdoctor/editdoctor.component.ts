import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Doctor } from '../doctor';
import { DoctorStatusService } from '../doctor-status.service';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {
  doctorForm: FormGroup;
  doctordata: Doctor;
  id = 0;
  isLog:boolean = false
  constructor(public doctorStatusService:DoctorStatusService,private userdataservice : UserserviceService,private route: ActivatedRoute, private service: DoctorService, private messageService: MessageService, private rut: Router) { }

  ngOnInit() {

    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }

    this.id = this.route.snapshot.params.userId;
    // console.log(this.id);
    console.log(this.route.snapshot.params.userId);

    this.service.getdoctorByid(this.id).then(res => {

      this.doctordata = res.data;


      this.doctorForm = new FormGroup({
        userId:new FormControl(this.doctordata.userId,Validators.required),
        firstname: new FormControl(this.doctordata.firstname, Validators.required),
        lastname: new FormControl(this.doctordata.lastname, Validators.required),
        email: new FormControl(this.doctordata.email, Validators.required),
        password: new FormControl(this.doctordata.password, Validators.required),
        gender: new FormControl(this.doctordata.gender, Validators.required),
        qualification: new FormControl(this.doctordata.qualification, Validators.required),
        specialization: new FormControl(this.doctordata.specialization, Validators.required),
        experience: new FormControl(this.doctordata.experience, Validators.required),
        about: new FormControl(this.doctordata.about, Validators.required),
        status:new FormControl(this.doctordata.status,Validators.required),
        registrationNo: new FormControl(this.doctordata.registrationNo, Validators.required),
      })
    })
  }
  
  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }
  submit() {
    if(this.id){
      console.log(this.id);

      this.service.updatedoctor(this.doctorForm.value).subscribe(res => {
        console.log(res);
        this.rut.navigateByUrl('doctor')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }
  }

}
