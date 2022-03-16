import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouterService} from "../../../services/router.service";
import {LocService} from "../../../services/locale.service";
declare let $:any;
@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

  urls = [
    {name:'Home', url:''},
    {name:'Product Range', url:'/product-range'},
    // {name:'Automation solutions', url:'/automation-solutions'},
    {name:'Our Projects', url:'/our-projects'},
    {name:'Temsanair', url:'/about'},
  ];
  showContainer1:boolean =false;
  showContainer2:boolean =false;
  showContainer3:boolean =false;
  showContainer4:boolean =false;
  showContainer5:boolean =false;
  showContainer6:boolean = false;
  showContainer7:boolean = false;
  showContainer8:boolean = false;

  constructor(private router: Router,private routerSer: RouterService,
              public locale: LocService,) {
    if ($(window).width() >= 1280) {
      this.showContainer1 = true;
    } else if ($(window).width() >= 1024) {
      this.showContainer2 = true;
    } else if ($(window).width() >= 912) {
      this.showContainer3 = true;
    } else if ($(window).width() >= 820) {
      this.showContainer4 = true;
    } else if ($(window).width() >= 768) {
      this.showContainer5 = true;
    } else if ($(window).width() >= 540) {
      this.showContainer6 = true;
    } else if ($(window).width() >= 414) {
      this.showContainer7 = true;
    } else if ($(window).width() >= 375) {
      this.showContainer8 = true;
    }
  }

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

  onMenu() {
    $('#langbtn_'+localStorage.getItem('lang')).addClass('active-lang');
  }
}
