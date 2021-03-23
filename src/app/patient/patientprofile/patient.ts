import { User } from "src/app/signup-login/user";

export interface Patient extends User {
    patientid:number;
    patientname:String;
    phoneno:String;
    age:number;
    profilepic:String;
    cityid:number;
    cityname:String;
    userId:number;
    pincode:number;
}
