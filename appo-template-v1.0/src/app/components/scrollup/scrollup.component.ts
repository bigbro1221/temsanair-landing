import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.css']
})
export class ScrollupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollUp() {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  }
}
