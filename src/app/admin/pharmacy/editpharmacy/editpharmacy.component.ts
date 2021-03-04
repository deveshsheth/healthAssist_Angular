import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Pharmacy } from '../pharmacy';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-editpharmacy',
  templateUrl: './editpharmacy.component.html',
  styleUrls: ['./editpharmacy.component.css']
})
export class EditpharmacyComponent implements OnInit {
  listcities:{}
  pharmacyForm : FormGroup;
  pharmacydata:Pharmacy;
  id=0;
  isLog: boolean = false
  constructor(private userdataservice: UserserviceService,private route : ActivatedRoute,private service : PharmacyService,private messageService: MessageService,private rut : Router) { }

  ngOnInit() {

    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }

    this.id=this.route.snapshot.params.pharmacyId;
    // console.log(this.id);
    console.log(this.route.snapshot.params.pharmacyId);

    this.service.getpharmacyByid(this.id).then(res => {

      this.pharmacydata=res.data;

    this.pharmacyForm = new FormGroup({
      pharmacyid:new FormControl(this.pharmacydata.pharmacyid,Validators.required),
      pharmacyname : new FormControl(this.pharmacydata.pharmacyname,Validators.required),
      timing : new FormControl(this.pharmacydata.timing,Validators.required),
      phoneno : new FormControl(this.pharmacydata.phoneno,Validators.required),
      rating : new FormControl(this.pharmacydata.rating,Validators.required),
      address : new FormControl(this.pharmacydata.address,Validators.required),
      about : new FormControl(this.pharmacydata.about,Validators.required),
      cityid : new FormControl(this.pharmacydata.cityid,Validators.required),
      pincode : new FormControl(this.pharmacydata.pincode,Validators.required)
    })
  })

    this.service.listcities().then(res => {
      this.listcities = res.data;
    })
    
  }
  submit(){

    if(this.id){
      console.log(this.id);

      this.service.updatepharmacy(this.pharmacyForm.value).subscribe(res => {
        console.log(res);
        this.rut.navigateByUrl('pharmacy')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }
  }

  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }
}
