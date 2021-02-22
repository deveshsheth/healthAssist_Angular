import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardGuard } from '../signup-login/authguard.guard';
import { LoginService } from '../signup-login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice : AuthguardGuard,private loginservice : LoginService,private rut :Router) { }

  ngOnInit(): void {
}
 isLoggedIn() {
  return this.loginservice.isLoggedIn();
}

logout(){
  console.log("logout successfully...!!");
  this.rut.navigate(['/']);
}

}
