import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NewpasswordService } from './newpassword.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  ChangePasswordForm:FormGroup;

  constructor( private newpasswordservice : NewpasswordService ,private rut:Router,
    private messageService: MessageService ) { }

  ngOnInit(): void {

    this.ChangePasswordForm = new FormGroup({
      otp:new FormControl('',Validators.required),
      newpassword:new FormControl('',Validators.required),
      email : new FormControl('',Validators.required)
    })
  }
  changepassword(){
    console.log(this.ChangePasswordForm.value);
    
    
    this.newpasswordservice.changeNewPassword(this.ChangePasswordForm.value).subscribe(res => {
      console.log(res.data);
      console.log('Done....!!!!');

      if(res.status == 200){

        this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});
        this.rut.navigateByUrl("login");
      }else{

        this.messageService.add({severity:'error', summary: 'Error', detail: res.msg});

      }
   

      
      
      
      
    })

    
  }

}
