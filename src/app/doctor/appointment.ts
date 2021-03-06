export interface Appointment {
    appointmentid:number;
    patientid:number;
    doctorid:number;
    statusid:number;
    appcreatedate:Date;
    comment:String;
    clinicid:number;
    reference:String;
    complain:String;
    appointmentdate:Date;
    appointmenttime:String;
    patientname:String;
    statusname:String;
    firstname:String;
    lastname:String;
    clinicname:String;
    statusreason:String;
    email:String;
    phoneno:String;
    gender:String;
    age:number;
    description:String;
	prescriptiondate:Date;
	generaladvice:String;
	followupcomment:String;
}
