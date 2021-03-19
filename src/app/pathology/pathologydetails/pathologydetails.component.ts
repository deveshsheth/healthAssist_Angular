import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserserviceService } from 'src/app/signup-login/userservice.service';
import { Pathology } from '../pathology';
import { PathologyService } from '../pathology.service';

@Component({
  selector: 'app-pathologydetails',
  templateUrl: './pathologydetails.component.html',
  styleUrls: ['./pathologydetails.component.css']
})
export class PathologydetailsComponent implements OnInit {
  isLog: boolean = false
  id=0;
  listUserPathology:Pathology
  constructor(private route :ActivatedRoute,private service : PathologyService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.pathologyId;
    this.service.getpathologyByid(this.id).then(res => {
      this.listUserPathology = res.data;
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
