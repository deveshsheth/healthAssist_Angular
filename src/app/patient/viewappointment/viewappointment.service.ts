import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewappointmentService {

  public appointmentStatus:any= {1:"Accept", 2:"Reject" , 3:"Hold" , 4:"Wait_For_Accept" ,5:"Reschedule" ,6:"Done"};
  constructor(private http : HttpClient) { }

  viewPatientAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}viewPatientAppointment/${userid}`).toPromise();
  }

  listDoctClinicTiming(clinicid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listDoctClinicTiming/${clinicid}`).toPromise();
  }

  getAppointmentByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getappointmentid/${appointmentid}`).toPromise();
  }

  
}
