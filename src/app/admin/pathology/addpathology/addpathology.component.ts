import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { PathologyService } from '../pathology.service';

@Component({
  selector: 'app-addpathology',
  templateUrl: './addpathology.component.html',
  styleUrls: ['./addpathology.component.css']
})
export class AddpathologyComponent implements OnInit {
  listcities: {}
  pathologyForm: FormGroup;
  isLog: boolean = false
  constructor(public userdataservice: UserserviceService,private service: PathologyService, private messageService: MessageService, private rut: Router) { }

  ngOnInit() {

    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }

    this.pathologyForm = new FormGroup({
      pathologyname: new FormControl('', Validators.required),
      timing: new FormControl('', Validators.required),
      phoneno: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      cityid: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required)
    })

    this.service.listcities().then(res => {
      this.listcities = res.data;
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

    this.service.addpathology(this.pathologyForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      console.log(res.data);
      this.rut.navigateByUrl('pathology')

    });
  }
}
