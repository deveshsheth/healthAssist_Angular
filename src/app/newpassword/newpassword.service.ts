import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewpasswordService {

  constructor(private http : HttpClient) { }

   changeNewPassword(data : any):Observable<any>{
     console.log(data.email);
     
     return this.http.get(`${environment.Base_Url}setnewpassword/`+data.otp+"/"+data.newpassword+"/"+data.email);
   }
}
