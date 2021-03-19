import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-pharmacydetails',
  templateUrl: './pharmacydetails.component.html',
  styleUrls: ['./pharmacydetails.component.css']
})
export class PharmacydetailsComponent implements OnInit {
  isLog: boolean = false
  id=0;
  listUserPharmacy:Pharmacy
  constructor(private route : ActivatedRoute,private pharmacyService : PharmacyService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.pharmacyId;
    this.pharmacyService.getpharmacyByid(this.id).then(res => {
      this.listUserPharmacy = res.data;
    })
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

}
