import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-adddiet',
  templateUrl: './adddiet.component.html',
  styleUrls: ['./adddiet.component.css']
})
export class AdddietComponent implements OnInit {
dietForm:FormGroup;
isLog:boolean = false
  constructor(public userdataservice : UserserviceService,private service:DietService,private messageService: MessageService, private rut: Router) { }

  ngOnInit() {

    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }

    this.dietForm = new FormGroup({
      diettype:new FormControl('',Validators.required),
      dietcontent:new FormControl('',Validators.required),
      agegroup:new FormControl('',Validators.required)
    })

  }
  submit(){
    
    this.service.addDiet(this.dietForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      this.rut.navigateByUrl('diet')
    })

  }
  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }

}
