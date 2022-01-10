import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare let $:any;
@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

  products1 = [
    {name:'Axial Fan', url:'axial-fan'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onNavigate(p) {
    this.router.navigateByUrl('/product-range/' + p.url)
  }

  onAbout() {
    // var about = $('#about');
    // about.on('click', function (e) {
    //   e.preventDefault();
      if ((document.getElementById('about-app').clientHeight) > 0) {
        $('html,body').animate({
          scrollTop: (document.getElementById('about-app').offsetTop)
        }, 1000);
      }
    // });
  }
}
