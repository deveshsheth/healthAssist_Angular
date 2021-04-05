import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientprofileService {

  constructor(private http : HttpClient) { }

  // addpatient(model:any):Observable<any>{
  //   return this.http.post(`${environment.Base_Url}addPatient`,model);
  // }
  // listcities():Promise <any> {
  //   return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  // }

  getpatientByid(userId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getPatientprofile/${userId}`).toPromise();
  }
  getUserPatientByid(userId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getuserPatient/${userId}`).toPromise();
  }

  addFamilyMember(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addFamilyMember`,model);
  }
  listUserPatient(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listUserPatient/${userid}`).toPromise();
  }

}
