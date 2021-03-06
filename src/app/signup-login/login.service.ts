import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient,private userdataservice: UserserviceService, private rut: Router) { }

  login(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}login`, model);
  }

  isLoggedIn() {
    if (this.userdataservice.user.email.length == 0 && this.userdataservice.user.password.length == 0) {
      console.log(this.userdataservice.user.email);
      
      this.rut.navigate(['./login']);
      return false;
    } else {
      return true;

    }
  }
}