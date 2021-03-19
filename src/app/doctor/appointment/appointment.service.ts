import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http : HttpClient) { }

  listAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}listappointment/${userid}`).toPromise();
  }
}
