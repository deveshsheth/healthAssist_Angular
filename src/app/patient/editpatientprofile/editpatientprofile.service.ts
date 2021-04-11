import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditpatientprofileService {

  constructor(private http : HttpClient) { }
  getUserByid(userId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getuser/${userId}`).toPromise();
  }

  updateUser(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateSignup`,model);
  }
  listcities():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }
}
