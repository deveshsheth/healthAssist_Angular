import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientappointmentService {

  constructor(private http : HttpClient) { }

  listdoctors():Promise<any> {
    return this.http.get(`${environment.Base_Url}listDoctor`).toPromise();
  }

  listClinic():Promise <any> {
    return this.http.get(`${environment.Base_Url}listClinic`).toPromise();
  }

  addAppointment(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addappointment`,model);
  }
  listDoctClinic(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listDoctClinic/${userid}`).toPromise();
  }
}
