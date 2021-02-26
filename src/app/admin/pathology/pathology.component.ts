import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PathologyService } from './pathology.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listpathology: {}
  value1: number = 0
  constructor(private rut: Router, private service: PathologyService, private messageService: MessageService) { }

   ngOnInit() {


    let interval = setInterval(() => {
      this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
      if (this.value1 >= 100) {
        this.value1 = 100;
        this.service.listpathology().then(res => {
          this.listpathology = res.data;
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
