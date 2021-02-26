import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private http: HttpClient,private rut : Router,private userdataservice : UserserviceService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("canactivate---authguard")
      console.log(this.userdataservice.user.email);
      
      if(this.userdataservice.user.email.length == undefined && this.userdataservice.user.password.length == undefined ){
        this.rut.navigate(['./login']);
        console.log("if");
        
      return false;
      }else{
        console.log("else");
        
        return true;
      }
    
  }
  
}
