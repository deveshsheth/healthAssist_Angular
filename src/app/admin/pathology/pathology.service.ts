import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http : HttpClient) { }

  listpathology():Promise<any> {
    return this.http.get(`${environment.Base_Url}listPathology`).toPromise();
  }

  listcities():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCities`).toPromise();
  }

  addpathology(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addPathology`,model);
  }

}
