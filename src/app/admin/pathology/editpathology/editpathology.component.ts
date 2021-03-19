import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Pathology } from '../pathology';
import { PathologyService } from '../pathology.service';

@Component({
  selector: 'app-editpathology',
  templateUrl: './editpathology.component.html',
  styleUrls: ['./editpathology.component.css']
})
export class EditpathologyComponent implements OnInit {
  listcities: {}
  pathologyForm: FormGroup;
  pathologydata:Pathology;
  id=0;
  isLog: boolean = false
  constructor(public userdataservice: UserserviceService,private route : ActivatedRoute,private service: PathologyService, private messageService: MessageService, private rut: Router) { }

  ngOnInit() {

    if (this.userdataservice.user.email.length != 0) {

      this.isLog = true;

    } else {
      this.isLog = false;
    }

    this.id=this.route.snapshot.params.pathologyId;
    // console.log(this.id);
    console.log(this.route.snapshot.params.pathologyId);
    
    
    this.service.getpathologyByid(this.id).then(res => {

    this.pathologydata=res.data;

    this.pathologyForm = new FormGroup({
      pathologyid:new FormControl(this.pathologydata.pathologyid,Validators.required),
      pathologyname: new FormControl(this.pathologydata.pathologyname, Validators.required),
      timing: new FormControl(this.pathologydata.timing, Validators.required),
      phoneno: new FormControl(this.pathologydata.phoneno, Validators.required),
      rating: new FormControl(this.pathologydata.rating, Validators.required),
      address: new FormControl(this.pathologydata.address, Validators.required),
      about: new FormControl(this.pathologydata.about, Validators.required),
      cityid: new FormControl(this.pathologydata.cityid, Validators.required),
      pincode: new FormControl(this.pathologydata.pincode, Validators.required)
    })

  })

    this.service.listcities().then(res => {
      this.listcities = res.data;
    })

  }

  logout(){
    this.userdataservice.user = null
    console.log("logout successfully...!!");

      this.isLog = false;
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Logout Successfully...!!"});
    this.rut.navigateByUrl('');
  }

  submit() {

    if(this.id){
      console.log(this.id);

      this.service.updatepathology(this.pathologyForm.value).subscribe(res => {
        console.log(res);
        this.rut.navigateByUrl('pathology')
        this.messageService.add({severity:'success',summary:'Updated',detail:res.msg});
        
      })
    }

  }
}
