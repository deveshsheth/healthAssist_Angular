import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http : HttpClient) { }

  listPathology():Promise<any> {
    return this.http.get(`${environment.Base_Url}listPathology`).toPromise();
  }
  getpathologyByid(pathologyId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getpathology/${pathologyId}`).toPromise();
  }
}
