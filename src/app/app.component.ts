import { Component, ViewChild, AfterViewInit,  OnInit, TemplateRef, Inject } from '@angular/core';
import { SiteComponent } from './site/site.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cocetz';

  // Typescript Media querie var
  mq = window.matchMedia('(min-width: 1000px)');
  @ViewChild(SiteComponent,  {static: false}) public siteComponent: SiteComponent;
  // NOTE: SET ACTIVE START YEAR BELOW IN CONCSTRUCTOR
  activeYear;

  active2019 = true;
  active2020 = true;
  active2021 = true;
  active2022 = true;

  pwdProtect = true;
  lastActive = '2022';
  protected = '';

  pwdMessage = '';

  pwdUnlock = '';

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

  hostName;

  @ViewChild('pwdmodal', {static: false}) pwdmodalRef: TemplateRef < any > ;


  constructor(private modalService: BsModalService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any){
    if (this.mq.matches) {
     
    } else {
      // window width is less than 500px
      $('body').toggleClass('ms-aside-left-open');
    }

    
  }

  ngAfterViewInit() {

    setTimeout( ()=> {
      this.activeYear = 2022;
      this.yearSelected('2022');
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '.beginn',
      });
    }, 0);

    
    // this returns null
}


  yearSelected(_year){

    if (this.pwdProtect === true && this.protected === _year ){
      this.openModal(this.pwdmodalRef);
    } else {
      this.siteComponent.yearSet(+_year);
      this.activeYear = +_year;
      this.active2019 = false;
      this.active2020 = false;
      this.active2021 = false;
      this.active2022 = false;
      switch (_year) {
        case '2019':
          this.active2019 = true;
          break;
          case '2020':
            this.active2020 = true;
            break;
            case '2021':
            this.active2021 = true;
            break;
            case '2022':
            this.active2022 = true;
            break;
   
      }
    }

    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.beginn',
    });

    
  }

  clickNav (){
    console.log("ok");
    $('body').toggleClass('ms-aside-left-open');
  }

  // when navigating, are we on mobile => hide menu
  checkIfMobile() {
    const useragent = navigator.userAgent;

    let isMobile = false;
        if(useragent.match(/Android/i)) {
          isMobile = true;
        } else if(!this.mq.matches) {
          isMobile = true;
        } else if(useragent.match(/webOS/i)) {
          isMobile = true;
        } else if(useragent.match(/iPhone/i)) {
          isMobile = true;
        } else if(useragent.match(/iPod/i)) {
          isMobile = true;
        } else if(useragent.match(/iPad/i)) {
          isMobile = true;
        } else if(useragent.match(/Windows Phone/i)) {
          isMobile = true;
        } else if(useragent.match(/SymbianOS/i)) {
          isMobile = true;
        } else if(useragent.match(/RIM/i) || useragent.match(/BB/i)) {
          isMobile = true;
        } else {
            return false;
        }

    if (isMobile === true){
      this.clickNav();
    }

  }


  openModal(template: TemplateRef<any>) {
    this.pwdMessage = '';
    // this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService.show(template, {
     class: 'gray modal-lg backdropdark',
     backdrop: true,
     ignoreBackdropClick: true
   });
   }
 
   hideModal() {
     this.modalRef.hide();
     this.activeYear = this.lastActive;
   }


   checkUnlock(){
     console.log(this.pwdUnlock);
    if (this.pwdUnlock === 'goudvis'){
      this.pwdMessage = 'correct';
      this.siteComponent.yearSet(+this.protected);
      this.activeYear = +this.protected;
      this.active2019 = false;
      this.active2020 = false;
      this.active2021 = false;
      this.active2022 = false;
      switch (this.protected) {
        case '2019':
          this.active2019 = true;
          break;
          case '2020':
            this.active2020 = true;
            break;
            case '2021':
            this.active2021 = true;
            break;
            case '2022':
            this.active2022 = true;
            break;
      }
      this.pwdProtect = false;
      this.modalRef.hide();
    } else {
      this.pwdMessage = 'failed';
    }
  }



}
