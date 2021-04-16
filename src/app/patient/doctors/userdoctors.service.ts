import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdoctorsService {

  constructor(private http:HttpClient) { }
  listdoctor():Promise<any> {
    return this.http.get(`${environment.Base_Url}listDoctor`).toPromise();
  }
  getdoctorByid(userId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getdoctor/${userId}`).toPromise();
  }
   listDoctClinic(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listDoctClinic/${userid}`).toPromise();
  }

  searchDoctor():Promise <any> {
    return this.http.get(`${environment.Base_Url}searchDoctor`).toPromise();
  }
  
}
