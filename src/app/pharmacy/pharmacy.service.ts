import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http :HttpClient) { }

  listPharmacy():Promise<any> {
    return this.http.get(`${environment.Base_Url}listPharmacy`).toPromise();
  }

  addPharmacy(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}adduserPharmacy`,model);
  }

  listUserPharmacy(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}listUserPharmacy/${userid}`).toPromise();
  }

  listcities():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }
  getpharmacyByid(pharmacyId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getpharmacy/${pharmacyId}`).toPromise();
  }

  deleteUserPharmacy(pharmacyid : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}addUserPharmacy/${pharmacyid}`);
  }

  addAssignUserPharmacy(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addAssignUserPharmacy`,model);
  }

  updatepharmacy(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updatePharmacy`,model);
  }

}
