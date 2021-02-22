import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  getrole(): Promise<any> {
    return this.http.get(`${environment.Base_Url}listRole`).toPromise();
  }

  addsignup(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}Signup`, model);
  }




}
