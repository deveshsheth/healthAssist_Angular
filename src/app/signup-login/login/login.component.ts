import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../login.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
  
  constructor(private signinservice : LoginService,private rut:Router,private messageService: MessageService,private userservice : UserserviceService) { }

  ngOnInit(): void {

    this.signinForm = new FormGroup({
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })

  }

  submit(){
    console.log(this.signinForm.value);
    this.signinservice.login(this.signinForm.value).subscribe(res => {
      if(res.status == 200){
        this.userservice.user = res.data;
        if(res.data.roleId == 1){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Admin Successfully...!!!'});
          console.log("Admin");
          this.rut.navigateByUrl('dashboard');
        }
        else if(res.data.roleId ==2){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Patient Successfully...!!!'});
          console.log("Patient");
          this.rut.navigateByUrl('');
        }
        else if(res.data.roleId ==3){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Doctor Successfully...!!!'});
          console.log("Doctor");
          this.rut.navigateByUrl('');
        }
        else if(res.data.roleId ==4){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Pharmacy Successfully...!!!'});
          console.log("Pharmacy");
          this.rut.navigateByUrl('');
        }
        else if(res.data.roleId ==5){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Pathology Successfully...!!!'});
          console.log("Pathology");
          this.rut.navigateByUrl('/home');
        }
      }
      else{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Invalid Credentials...!!!'});
        console.log("error...!!!");
        
      }
    })
    
  }

}
