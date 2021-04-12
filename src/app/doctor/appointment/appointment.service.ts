import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  public appointmentStatus:any= {1:"Accept", 2:"Reject" , 3:"Hold" , 4:"Wait_For_Accept" ,5:"Reschedule" ,6:"Done"};
  constructor(private http : HttpClient) { }

  listAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}listappointment/${userid}`).toPromise();
  }

  acceptrejectappointment(model :any):Observable<any> {
    
    return this.http.put(`${environment.Base_Url}accept_reject_appointment`,model)
  }

  todayAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}todayAppointment/${userid}`).toPromise();
  }
  
  waitForAcceptAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}waitForAcceptAppointment/${userid}`).toPromise();
  }

  acceptAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}acceptAppointment/${userid}`).toPromise();
  }

  rescheduleAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}rescheduleAppointment/${userid}`).toPromise();
  }

  doneAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}doneAppointment/${userid}`).toPromise();
  }

  listDoctClinic(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listDoctClinic/${userid}`).toPromise();
  }
}
