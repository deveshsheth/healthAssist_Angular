import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http : HttpClient) { }

  listpatient():Promise <any> {
    return this.http.get(`${environment.Base_Url}listPatient`).toPromise();
  }


}
