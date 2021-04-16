import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminappointmentService {

  public appointmentStatus:any= {1:"Accept", 2:"Reject" , 3:"Hold" , 4:"Wait_For_Accept" ,5:"Reschedule" ,6:"Done"};
  constructor(private http:HttpClient) { }

  listAllAppointment():Promise<any> {
    return this.http.get(`${environment.Base_Url}listAllAppointment`).toPromise();
  }
}
