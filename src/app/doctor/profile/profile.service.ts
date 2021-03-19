import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  getDoctorProfileById(userId:any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getdoctor/${userId}`).toPromise();
  }

  updateDoctor(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateDoctor`,model);
  }
}
