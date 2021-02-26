import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientlist: {};
  dtOptions: DataTables.Settings = {};
  value1: number = 0
  constructor(private patientservice: PatientService, private messageService: MessageService) { }

  ngOnInit() {

    let interval = setInterval(() => {
      this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
      if (this.value1 >= 100) {
        this.value1 = 100;
        this.patientservice.listpatient().then(res => {
          console.log("hello patient...!!");

          this.patientlist = res.data;
          console.log(res.data);

        })
        clearInterval(interval);
      }
    }, 200);


    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
