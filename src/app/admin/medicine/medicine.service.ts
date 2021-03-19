import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http : HttpClient) { }

  listMedicine():Promise<any> {
    return this.http.get(`${environment.Base_Url}listMedicine`).toPromise();
  }

  addMedicine(model :any):Observable<any> {
    return this.http.post(`${environment.Base_Url}addMedicine`,model);
  } 

  getMedicineByid(medicineid :any):Promise<any> {
    return this.http.get(`${environment.Base_Url}getMedicine/${medicineid}`).toPromise();
  }
  updateMedicine(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateMedicine`,model);
  }
  deleteMedicine(medicineid : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}deleteMedicine/${medicineid}`);
  }
}
