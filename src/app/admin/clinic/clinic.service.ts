import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private http : HttpClient) { }

  listClinic():Promise <any> {
    return this.http.get(`${environment.Base_Url}listClinic`).toPromise();
  }
  listcities():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }

  addclinic(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addClinic`,model);
  }

  getclinicByid(pathologyId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getclinic/${pathologyId}`).toPromise();
  }

  updateclinic(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateClinic`,model);
  }

  deleteClinic(clinicid : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}addClinic/${clinicid}`);
  }
}
