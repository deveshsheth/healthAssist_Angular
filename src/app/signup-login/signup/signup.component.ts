import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;

  constructor(private signupService: SignupService, private messageService: MessageService) { }

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

    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Signup Successfully...!!!'});
    this.signupService.addsignup(this.signupForm.value).subscribe(res => {

      console.log(res.data);

    });

  }

}
