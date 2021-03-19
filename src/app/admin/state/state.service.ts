import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http : HttpClient) { }

  listStates():Promise<any> {
    return this.http.get(`${environment.Base_Url}listState`).toPromise();
  }

  addStates(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addState`,model);
  } 

  getStateByid(stateid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getState/${stateid}`).toPromise();
  }

  updateState(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateState`,model);
  }

  deleteState(stateid : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}addState/${stateid}`);
  }
}
