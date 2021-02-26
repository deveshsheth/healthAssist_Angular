import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http : HttpClient) { }

  listpharmacy():Promise <any> {
    return this.http.get(`${environment.Base_Url}listPharmacy`).toPromise();
  }

  listcities():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }

  addpharmacy(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addPharmacy`,model);
  }
}
