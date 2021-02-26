import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PathologyService } from '../pathology.service';

@Component({
  selector: 'app-editpathology',
  templateUrl: './editpathology.component.html',
  styleUrls: ['./editpathology.component.css']
})
export class EditpathologyComponent implements OnInit {
  pathologyForm : FormGroup;
  listcities:{}
  
  constructor(private service : PathologyService,private messageService: MessageService,private rut : Router) { }

  ngOnInit() {

   
    
    this.pathologyForm = new FormGroup({
      pathologyname : new FormControl('',Validators.required),
      timing : new FormControl('',Validators.required),
      phoneno : new FormControl('',Validators.required),
      rating : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      about : new FormControl('',Validators.required),
      cityid : new FormControl('',Validators.required),
      pincode : new FormControl('',Validators.required)
    })

    this.service.listcities().then(res => {
      this.listcities = res.data;
    })

  }
  submit(){
    
  }
}
