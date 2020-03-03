import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cocetz';

  // Typescript Media querie var
  mq = window.matchMedia('(min-width: 1000px)');


  constructor(){
    if (this.mq.matches) {
     
    } else {
      // window width is less than 500px
      $('body').toggleClass('ms-aside-left-open');
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
