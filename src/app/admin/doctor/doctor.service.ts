import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }

  listdoctor():Promise<any> {
    return this.http.get(`${environment.Base_Url}listDoctor`).toPromise();
  }

  adddoctor(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}doctorsignup`,model);
  } 

  getdoctorByid(userId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getdoctor/${userId}`).toPromise();
  }
  updatedoctor(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateDoctor`,model);
  }
  countDoctor():Promise<any>{
    return this.http.get(`${environment.Base_Url}countdoctor`).toPromise();
  }
  deletedoctor(userId : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}deleteDoctor/${userId}`);
  }
  listClinic():Promise <any> {
    return this.http.get(`${environment.Base_Url}listClinic`).toPromise();
  }

  addDoctClinic(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addDoctClinic`,model);
  } 

  listDoctClinic():Promise <any> {
    return this.http.get(`${environment.Base_Url}listDoctClinic`).toPromise();
  }
  deletedoctclinic(doctclinicid : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}addDoctClinic/${doctclinicid}`);
  }
}
