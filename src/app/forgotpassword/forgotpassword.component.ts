import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from '../signup-login/userservice.service';
import { FogotpasswordService } from './fogotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
ResetPasswordForm:FormGroup;
  constructor(
    private rut:Router,
    private messageService: MessageService,
    private resetservice: FogotpasswordService,
    private userdataservice : UserserviceService
    ) { }

  ngOnInit(): void {

    this.ResetPasswordForm = new FormGroup({
      email:new FormControl('',Validators.required)
    })

  }

  resetpassword(){
    
    this.resetservice.resetPassword(this.ResetPasswordForm.value.email).subscribe(res => {

      if(res.status == 200){
        this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});
        // this.userdataservice.user.email = this.ResetPasswordForm.value;
        this.rut.navigateByUrl("newpassword");
      }else{
        this.messageService.add({severity:'error', summary: 'Error', detail: res.msg});
      }
      
      console.log(res.data);
      
    })

  }

}
