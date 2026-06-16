import { Component, OnInit,ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'contentpage',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  activeYear = 2025;
  
  hostName;
  constructor(private modalService: BsModalService) {
   
  }

  @ViewChild('pwdmodal', {static: false}) pwdmodalRef: TemplateRef < any > ;

  isLightboxOpen = false;
  lightboxImgSrc = '';
  lightboxImgAlt = '';

  openLightbox(src: string, alt: string) {
    this.lightboxImgSrc = src;
    this.lightboxImgAlt = alt;
    this.isLightboxOpen = true;
  }

  closeLightbox() {
    this.isLightboxOpen = false;
  }

  yearSet(yearSelected: number) {
   
    this.activeYear = yearSelected;


  }
  

  ngOnInit() {

 
  }

  


 

}
