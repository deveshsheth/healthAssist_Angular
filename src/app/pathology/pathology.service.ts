import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http : HttpClient) { }

  listPathology():Promise<any> {
    return this.http.get(`${environment.Base_Url}listPathology`).toPromise();
  }

  addPathology(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}adduserPathology`,model);
  }

  listUserPathology(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_Url}listUserPathology/${userid}`).toPromise();
  }

  listcities():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }

  getpathologyByid(pathologyId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getpathology/${pathologyId}`).toPromise();
  }

  addAssignUserPathology(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addAssignUserPathology`,model);
  }

  updatepathology(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updatePathology`,model);
  }
}
