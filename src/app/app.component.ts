import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cocetz';

  // Typescript Media querie var
  mq = window.matchMedia('(min-width: 700px)');


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


}
