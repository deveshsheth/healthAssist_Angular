import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listdoctor:{}
  value1: number = 0
  constructor(private service : DoctorService) { }

 async ngOnInit() {

  let interval = setInterval(() => {
    this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
    if (this.value1 >= 100) {
      this.value1 = 100;
      this.service.listdoctor().then(res => {
        this.listdoctor = res.data;
      })
    
      clearInterval(interval);
    }
  }, 200);
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  

}
