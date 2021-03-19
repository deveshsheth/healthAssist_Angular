import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-addpharmacy',
  templateUrl: './addpharmacy.component.html',
  styleUrls: ['./addpharmacy.component.css']
})
export class AddpharmacyComponent implements OnInit {
listcities:{}
pharmacyForm : FormGroup;
isLog: boolean = false
  constructor(public userdataservice: UserserviceService,private service : PharmacyService,private messageService: MessageService,private rut : Router) { }

  ngOnInit() {

    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }

    this.pharmacyForm = new FormGroup({
      pharmacyname : new FormControl('',Validators.required),
      timing : new FormControl('',Validators.required),
      phoneno : new FormControl('',Validators.required),
      rating : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      about : new FormControl('',Validators.required),
      cityid : new FormControl('',Validators.required),
      pincode : new FormControl('',Validators.required)
    })

    this.service.listcities().then(res => {
      this.listcities = res.data;
    })
  }

  submit(){
    
    this.service.addpharmacy(this.pharmacyForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      console.log(res.data);
      this.rut.navigateByUrl('pharmacy')

    });
  }

  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }

}
