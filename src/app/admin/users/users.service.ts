import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }
  
  adduser(model:any):Observable<any>{
    return this.http.post(`${environment.Base_Url}Signup`,model);
  }

  listuser():Promise<any> {
    return this.http.get(`${environment.Base_Url}listUser`).toPromise();
  }

  listRole():Promise<any> {
    return this.http.get(`${environment.Base_Url}listRole`).toPromise();
  }

  getUserByid(userId :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getuser/${userId}`).toPromise();
  }

  updateUser(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateSignup`,model);
  }

  deleteUser(userId : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}deleteSignup/${userId}`);
  }


}
