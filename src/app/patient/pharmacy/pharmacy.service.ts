import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http:HttpClient) { }

  listPharmacy():Promise<any> {
    return this.http.get(`${environment.Base_Url}listPharmacy`).toPromise();
  }
  getpharmacyByid(pharmacyId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getpharmacy/${pharmacyId}`).toPromise();
  }
}
