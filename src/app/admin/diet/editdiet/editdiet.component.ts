import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Diet } from '../diet';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-editdiet',
  templateUrl: './editdiet.component.html',
  styleUrls: ['./editdiet.component.css']
})
export class EditdietComponent implements OnInit {
  dietForm: FormGroup;
  dietdata: Diet;
  id = 0;
  isLog:boolean = false
  constructor(public userdataservice : UserserviceService,private service: DietService, private rut: Router, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {

    if(this.userdataservice.user.email.length != 0){
     
      this.isLog = true;
      
    }else {
      this.isLog = false;
    }

    this.id = this.route.snapshot.params.dietid;

    console.log(this.route.snapshot.params.userId);

    this.service.getDietByid(this.id).then(res => {

      this.dietdata = res.data;

      this.dietForm = new FormGroup({
        dietid: new FormControl(this.dietdata.dietid, Validators.required),
        diettype: new FormControl(this.dietdata.diettype, Validators.required),
        dietcontent: new FormControl(this.dietdata.dietcontent, Validators.required),
        agegroup: new FormControl(this.dietdata.agegroup, Validators.required)
      })
    })
  }

  submit()
  {
    this.dietdata = this.dietForm.value;
    if(this.id){
      console.log(this.id);
    
 
      console.log(this.dietdata);
      
      
      console.log(this.dietForm.value);
      this.service.updateDiet(this.dietForm.value).subscribe(res => {
        console.log(res);
        
        this.rut.navigateByUrl('diet')
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
