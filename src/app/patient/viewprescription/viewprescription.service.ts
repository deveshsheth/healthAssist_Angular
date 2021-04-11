import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewprescriptionService {

  constructor(private http : HttpClient) { }

  getAppointmentByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getPatientDetails/${appointmentid}`).toPromise();
  }

  listAppointmentDisease(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}listAppointmentDisease/${appointmentid}`).toPromise();
  }

  listDietUser(patientid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listDietUser/${patientid}`).toPromise();
  }

  listPrescriptionMedicine(appointmentid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listPrescriptionMedicine/${appointmentid}`).toPromise();
  }

  pastAppointmentList(patientid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}pastAppointmentList/${patientid}`).toPromise();
  }

}
