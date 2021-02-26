import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';
import { LoginService } from '../signup-login/login.service';
import { UserserviceService } from '../signup-login/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLog: boolean = false
  constructor(private authservice: AuthguardGuard, private loginservice: LoginService, private rut: Router, private userdataservice: UserserviceService) { }

  ngOnInit(): void {
    console.log(this.userdataservice.user.email);
    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }

  }
  // get isLoggedIn() {
  //   console.log();

  //   this.isLog = this.loginservice.isLoggedIn()
  //   console.log(this.isLog);

  //   return this.loginservice.isLoggedIn();
  // }

  logout() {
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
    
    this.rut.navigate(['/']);
    
  }

}
