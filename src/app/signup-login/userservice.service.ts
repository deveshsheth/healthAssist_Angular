
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  user:User={userId:0,firstname:"",lastname:"",email:"",password:"",gender:"",roleId:0,status:0,statusReason:"",otp:""}
  constructor() { }
}
