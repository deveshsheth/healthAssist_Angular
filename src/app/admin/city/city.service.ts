import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http : HttpClient) { }

  listCities():Promise<any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }

  listStates():Promise<any> {
    return this.http.get(`${environment.Base_Url}listState`).toPromise();
  }

  addCities(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addCities`,model);
  } 

  getCitiesByid(cityid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getCities/${cityid}`).toPromise();
  }

  updateCities(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateCities`,model);
  }

  deleteCities(CityId : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}addCities/${CityId}`);
  }
}
