import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
list: {}
  constructor(private signupService:SignupService) { }

  ngOnInit(): void {

    this.signupService.getrole().then(res => {
      this.list = res.data;
    })

    this.signupForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      role:new FormControl('',Validators.required)
    })
  }
  submit(){
    console.log(this.signupForm.value);
  }

}
