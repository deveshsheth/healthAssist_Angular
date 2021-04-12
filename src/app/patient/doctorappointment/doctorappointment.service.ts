import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorappointmentService {

  constructor(private http:HttpClient) { }
  
  // listClinic():Promise <any> {
  //   return this.http.get(`${environment.Base_Url}listClinic`).toPromise();
  // }
  listDoctClinic(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listDoctClinic/${userid}`).toPromise();
  }

  addAppointment(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addappointment`,model);
  }
  listUserPatient(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listUserPatient/${userid}`).toPromise();
  }
  listDoctClinicTiming(clinicid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listDoctClinicTiming/${clinicid}`).toPromise();
  }

}
