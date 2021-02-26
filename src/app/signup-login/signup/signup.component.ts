import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;

  constructor(private signupService: SignupService, private messageService: MessageService,private rut : Router) { }

  ngOnInit(): void {




    this.signupForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      roleId: new FormControl(2, Validators.required),
      gender: new FormControl('', Validators.required)
    });
  }
  // tslint:disable-next-line:typedef
  submit(){

  
    this.signupService.addsignup(this.signupForm.value).subscribe(res => {
      if(res.status == 200){
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      }
      else{
        this.messageService.add({severity: 'warn', summary: 'warn', detail: res.msg});
      }
      console.log(res.data);

    });

  }

}
