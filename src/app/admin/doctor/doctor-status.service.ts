import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorStatusService {

	 public doctorStatus:any= {1:"ACTIVE", 2:"PENDING" , 3:"DISABLE" , 4:"PAUSE" ,5:"KYC_DOCTOR"};
   public userRole:any= {1:"Admin", 2:"Patient" , 3:"Doctor" , 4:"Pharmacy" ,5:"Pathology"};

  constructor() { }
}
