import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'contentpage',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  activeYear = 2024;
  
  hostName;
  constructor(private modalService: BsModalService) {
   
  }

  @ViewChild('pwdmodal', {static: false}) pwdmodalRef: TemplateRef < any > ;

  yearSet(yearSelected: number) {
   
    this.activeYear = yearSelected;


  }
  

  ngOnInit() {

 
  }

  


 

}
