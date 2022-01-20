import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouterService} from "../../../services/router.service";
declare let $:any;
@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

  urls = [
    {name:'Home', url:''},
    {name:'About', url:'/about'},
    {name:'Product Range', url:'/product-range'},
    {name:'Automation solutions', url:'/automation-solutions'}
  ];

  constructor(private router: Router,private routerSer: RouterService) { }

  ngOnInit(): void {
  }

  onNavigate(u, i) {
    this.routerSer.setUrl(u.url);
  }

  onAbout() {
    if ((document.getElementById('about-app').clientHeight) > 0) {
      $('html,body').animate({
        scrollTop: (document.getElementById('about-app').offsetTop)
      }, 1000);
    }
  }
}
