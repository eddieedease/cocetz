import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contentpage',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  activeYear = 2020;

  constructor() { }

  

  yearSet(yearSelected: number) {
    this.activeYear = yearSelected;
  }

  ngOnInit() {

 
  }

}
