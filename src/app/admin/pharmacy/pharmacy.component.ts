import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacyService } from './pharmacy.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  pharmacylist:{}
  value1 : number=0
  constructor(private rut : Router,private service : PharmacyService) { }

  ngOnInit() {
    

  let interval = setInterval(() => {
    this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
    if (this.value1 >= 100) {
      this.value1 = 100;
      this.service.listpharmacy().then(res => {
        this.pharmacylist = res.data;
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
