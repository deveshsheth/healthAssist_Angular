import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PharmacyService } from 'src/app/pharmacy/pharmacy.service';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Pathology } from '../pathology';
import { PathologyService } from '../pathology.service';

@Component({
  selector: 'app-pathologyhome',
  templateUrl: './pathologyhome.component.html',
  styleUrls: ['./pathologyhome.component.css']
})
export class PathologyhomeComponent implements OnInit {
  isLog: boolean = false
  listPathology:{}
  pathologyForm:FormGroup
  listUserPathology:{}
  listcities:{}
  editUserPathology:FormGroup
  editPathologyData:Pathology
  id=0;
  constructor(private route : ActivatedRoute,private confirmationService : ConfirmationService,private pathologyService : PathologyService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.pathologyId;

    this.pathologyService.listPathology().then(res => {
      this.listPathology = res.data;
    })
    this.pathologyService.listcities().then(res => {
      this.listcities = res.data;
    })
    this.pathologyService.listUserPathology(this.userdataservice.user.userId).then(res => {
      this.listUserPathology = res.data;
      console.log(res.data);
      
    })

    this.pathologyForm = new FormGroup({
      userid:new FormControl(this.userdataservice.user.userId,Validators.required),
      pathologyid:new FormControl('',Validators.required),
      pathologyname:new FormControl('',Validators.required),
      timing:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      phoneno:new FormControl('',Validators.required),
      about:new FormControl('',Validators.required),
      cityid:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required)
    })

    this.pathologyService.getpathologyByid(this.id).then(res => {
      this.editPathologyData = res.data;

      this.pathologyForm = new FormGroup({
        pathologyid:new FormControl(this.editPathologyData.pathologyid,Validators.required),
        pathologyname:new FormControl(this.editPathologyData.pathologyname,Validators.required),
        timing:new FormControl(this.editPathologyData.timing,Validators.required),
        address:new FormControl(this.editPathologyData.address,Validators.required),
        phoneno:new FormControl(this.editPathologyData.phoneno,Validators.required),
        about:new FormControl(this.editPathologyData.about,Validators.required),
        cityid:new FormControl(this.editPathologyData.cityid,Validators.required),
        pincode:new FormControl(this.editPathologyData.pincode,Validators.required)
      })
    
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
  submit(){
    if(this.id){
      this.pathologyService.updatepathology(this.pathologyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
    }
    else {
      this.pathologyService.addAssignUserPathology(this.pathologyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
    }
    
    this.rut.navigateByUrl('pathologyhome')
    console.log(this.pathologyForm.value);
    
  }

}
