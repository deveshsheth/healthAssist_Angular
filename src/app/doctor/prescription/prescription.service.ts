import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http : HttpClient) { }

  listAppointmentForDoctor(appointmentid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}listAppointmentForDoctor/${appointmentid}`).toPromise();
  }
  
}
