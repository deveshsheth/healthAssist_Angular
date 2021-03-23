import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PatientService } from 'src/app/admin/patient/patient.service';
import { Patient } from 'src/app/patient/patientprofile/patient';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment/appointment.service';
import { PrescriptionService } from './prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  isLog: boolean = false
  dtOptions: DataTables.Settings = {};
  id = 0
  PrescriptionData: {}
  prescriptionForm: FormGroup;
  prescriptionData: Appointment;
  listMedicine: {}
  prescriptionMedicineForm: FormGroup
  listDisease:{}
  diseaseForm:FormGroup
  listAppointmentDisease:{}
  listAppointment:{};
  listDiet:{}
  dietUserForm:FormGroup
  constructor(private route: ActivatedRoute, public userdataservice: UserserviceService, private Service: PrescriptionService, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {

    this.Service.listAppointmentForDoctor(this.userdataservice.user.userId).then(res => {
      this.listAppointment = res.data;
     
    })

    this.dietUserForm = new FormGroup({
      dietid:new FormControl('',Validators.required),
      userid:new FormControl('',Validators.required)
    })

    this.Service.listDiet().then(res => {
      this.listDiet = res.data;
    })

    this.id = this.route.snapshot.params.appointmentid;
    console.log(this.id);

    this.Service.getAppointmentByid(this.id).then(res => {
      this.prescriptionData = res.data;

      

      this.prescriptionMedicineForm = new FormGroup({
        patientprofileid: new FormControl(this.prescriptionData.patientid, Validators.required),
        doctorprofileid: new FormControl(this.prescriptionData.doctorid, Validators.required),
        appointmentid: new FormControl(this.id, Validators.required),
        description: new FormControl('', Validators.required),
        prescriptiondate: new FormControl('', Validators.required),
        generaladvice: new FormControl('', Validators.required),
        followupcomment: new FormControl('', Validators.required),
        prescriptionid: new FormControl('', Validators.required),
        medicineid: new FormControl('', Validators.required),
        frequency: new FormControl('', Validators.required),
        duration: new FormControl('', Validators.required),
        instructions: new FormControl('', Validators.required)
      })

      this.diseaseForm = new FormGroup({
        appointmentid:new FormControl(this.id,Validators.required),
        patientprofileid:new FormControl(this.prescriptionData.patientid,Validators.required),
        diseaseid:new FormControl('',Validators.required)
      })
    })



    this.Service.listMedicine().then(res => {
      this.listMedicine = res.data;
    })

    this.Service.listDisease().then(res => {
      this.listDisease = res.data;
    })

    this.Service.listAppointmentDisease().then(res => {
      this.listAppointmentDisease = res.data;
    })
    

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }
  }
  logout() {
    this.userdataservice.user = null
    console.log("logout successfully...!!");

    this.isLog = false;
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Logout Successfully...!!" });
    this.rut.navigateByUrl('');
  }
  submit() {
    this.Service.addPrescriptioneMedicine(this.prescriptionMedicineForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })

  }
  diseaseSubmit(){
    this.Service.addAppointmentDisease(this.diseaseForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })
    console.log(this.diseaseForm.value);
    
  }
  dietUserSubmit(){
    console.log(this.dietUserForm.value);
    
  }


}
