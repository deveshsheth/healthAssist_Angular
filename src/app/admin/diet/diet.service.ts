import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(private http : HttpClient) { }

  listDiet():Promise <any> {
    return this.http.get(`${environment.Base_Url}listDiet`).toPromise();
  }

  addDiet(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addDiet`,model);
  }

  getDietByid(dietid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getDiet/${dietid}`).toPromise();
  }

  updateDiet(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateDiet`,model);
  }

  deleteDiet(dietid : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}addDiet/${dietid}`);
  }
}
