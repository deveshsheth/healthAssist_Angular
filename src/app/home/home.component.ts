import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../signup-login/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLog: boolean = false
  constructor(private rut: Router, private userdataservice: UserserviceService) { }

  ngOnInit(): void {
    if(this.userdataservice.user != null && this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }
  }
  logout() {
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
    
    this.rut.navigate(['/']);
    
  }

}
