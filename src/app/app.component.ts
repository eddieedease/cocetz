import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { SiteComponent } from './site/site.component';


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

  active2019 = false;
  active2020 = false;


  constructor(){
    if (this.mq.matches) {
     
    } else {
      // window width is less than 500px
      $('body').toggleClass('ms-aside-left-open');
    }

    
  }

  ngAfterViewInit() {

    setTimeout( ()=> {
      this.activeYear = 2020;
      this.yearSelected('2020');
    }, 0);

   
    // this returns null
}


  yearSelected(_year){
    this.siteComponent.yearSet(+_year);
    this.activeYear = +_year;
    this.active2019 = false;
    this.active2020 = false;
    switch (_year) {
      case '2019':
        this.active2019 = true;
        break;
        case '2020':
          this.active2020 = true;
          break;
 
    }
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



}
