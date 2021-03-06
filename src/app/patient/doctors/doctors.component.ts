import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/admin/doctor/doctor';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { UserdoctorsService } from './userdoctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  isLog: boolean = false
  userdoctor:{}
  searchDoctor:{}
  doctorData:Doctor
  searchForm:FormGroup
  searchedKeyword: string;
  constructor(private userdoctorService : UserdoctorsService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit(){
    this.userdoctorService.listdoctor().then(res => {
      this.userdoctor = res.data;
    })

    this.searchForm = new FormGroup({
      firstname:new FormControl('',Validators.required)
    })
    
    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }

  }
  logout() {
    this.userdataservice.user = null
    console.log("logout successfully...!!");

    this.isLog = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Logout Successfully...!!" });
    this.rut.navigateByUrl('');
  }

  submit(){
    this.userdoctorService.searchDoctor().then(res=> {
      this.searchDoctor = res.data;
      console.log("Search Doctor"+res.data);
      
    })

    
  }
  myFunc=()=> {
    var input, filter, tab, tr, p, i, td, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tab = document.getElementById("tab");
    tr = tab.getElementsByClassName("a");
    for (i = 0; i < tr.length; i++) {
        td = tr[i];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "None";
        }
    }
}

}
