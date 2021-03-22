import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http : HttpClient) { }

  
  listpathology():Promise <any> {
    return this.http.get(`${environment.Base_Url}listPathology`).toPromise();
  }

  listcities():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }

  addpathology(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addPathology`,model);
  }
  getAssignUserPathologyByid():Promise<any> {
    return this.http.get(`${environment.Base_Url}getAssignUserPathology`).toPromise();
  }

  getpathologyByid(pathologyId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getpathology/${pathologyId}`).toPromise();
  }

  updatepathology(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updatePathology`,model);
  }

  deletepathology(pathologyId : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}addPathology/${pathologyId}`);
  }

  addUserPathology(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}adduserPathology`,model);
  }
}
