import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http : HttpClient) { }

  listAppointmentForDoctor(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}listAppointmentForDoctor/${userid}`).toPromise();
  }

  addPrescription(model : any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addPrescription`,model);
  }

  addPrescriptioneMedicine(model : any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addPrescriptionMedicine`,model);
  }

  getAppointmentByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getappointmentid/${appointmentid}`).toPromise();
  }

  listMedicine():Promise<any> {
    return this.http.get(`${environment.Base_Url}listMedicine`).toPromise();
  }

  listDisease():Promise<any> {
    return this.http.get(`${environment.Base_Url}listDisease`).toPromise();
  }

  getPrescriptionMedicineByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getappointmentid/${appointmentid}`).toPromise();
  }

  addAppointmentDisease(model : any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addAppointmentDisease`,model);
  }

  listAppointmentDisease():Promise<any> {
    return this.http.get(`${environment.Base_Url}listAppointmentDisease`).toPromise();
  }

  listDiet():Promise <any> {
    return this.http.get(`${environment.Base_Url}listDiet`).toPromise();
  }

}
