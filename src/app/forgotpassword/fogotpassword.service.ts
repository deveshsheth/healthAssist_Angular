import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FogotpasswordService {

  constructor(private http : HttpClient) { }

  resetPassword(model : any):Observable<any>{
    
    
    return this.http.get(`${environment.Base_Url}resetpassword/`+model);
  }

}
