import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cocetz';



  clickNav (){
    console.log("ok")
      $('body').toggleClass('ms-settings-open');
  }


}
