import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Clinic } from '../clinic';
import { ClinicService } from '../clinic.service';

@Component({
  selector: 'app-editclinic',
  templateUrl: './editclinic.component.html',
  styleUrls: ['./editclinic.component.css']
})
export class EditclinicComponent implements OnInit {
  isLog:boolean = false
  clinicForm: FormGroup;
  clinicdata:Clinic;
  id=0;
  listcities:{}
  constructor(private route : ActivatedRoute,private service: ClinicService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {

    this.id=this.route.snapshot.params.clinicid;
    // console.log(this.id);
    console.log(this.route.snapshot.params.clinicid);
    
    
    this.service.getclinicByid(this.id).then(res => {

    this.clinicdata=res.data;

    this.clinicForm = new FormGroup({
      clinicid : new FormControl(this.clinicdata.clinicid,Validators.required),
      clinicname: new FormControl(this.clinicdata.clinicname, Validators.required),
      timing: new FormControl(this.clinicdata.timing, Validators.required),
      phoneno: new FormControl(this.clinicdata.phoneno, Validators.required),
      rating: new FormControl(this.clinicdata.rating, Validators.required),
      address: new FormControl(this.clinicdata.address, Validators.required),
      about: new FormControl(this.clinicdata.about, Validators.required),
      cityid: new FormControl(this.clinicdata.cityid, Validators.required),
      pincode: new FormControl(this.clinicdata.pincode, Validators.required)
    })
  })

      this.service.listcities().then(res => {
        this.listcities = res.data;
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
      console.log(this.id);

      this.service.updateclinic(this.clinicForm.value).subscribe(res => {
        console.log(res);
        this.rut.navigateByUrl('clinic')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }
  }

}
