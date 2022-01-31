import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {RouterService} from "../../services/router.service";
declare let $:any;

@Component({
  templateUrl: './projects.html',
})
export class Projects implements OnInit {

  products$: Observable<any>;
  productsList$: Observable<any>;
  img: Observable<any>;
  url: string = "assets/data/products.json";
  http: string = './assets/temsanair/products/';
  currList = '';
  time:number = 0;
  showContainer1:boolean =false;
  showContainer2:boolean =false;
  showContainer3:boolean =false;
  showContainer4:boolean =false;
  showContainer5:boolean =false;
  showContainer6:boolean = false;
  showContainer7:boolean = false;
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 500,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    draggable:true,
    cssEase: 'ease-out',
    centerPadding: '160px',
    swipeToSlide: true,
    swipe: true,
    mouseWheelMove: true,
    easing: 'ease',
    lazyLoad: 'ondemand',
    // variableWidth: true,
    "responsive": [
    ]
  };
  constructor(private httpClient: HttpClient,
              private routerSer: RouterService) {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res => res?.main_img));
    this.products$ = this.httpClient.get<any>(this.url).pipe(map(res => {
      for (let d of res?.data) {
        d.count = d?.text.length + d?.detail1.length + d?.detail2.length + d?.detail3.length + d?.detail4.length;
      }
      return res?.data;
    }));
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
    }
    this.productsList$ = this.httpClient.get<any>(this.url).pipe(map(res => res?.productList));
  }

  ngOnInit(){
    if (this.showContainer1 || this.showContainer2) {
      this.slideConfig.responsive = [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
    }
    if (this.showContainer3 || this.showContainer4 || this.showContainer5 || this.showContainer6) {
      this.slideConfig.responsive = [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }]
    }
    if (this.showContainer7) {
      this.slideConfig.responsive = [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    }
    window.scrollTo(0, 0);
  }

  getWidth():string {
    if (this.showContainer1) {
      return '80px';
    } else if (this.showContainer2 || this.showContainer3 || this.showContainer4 || this.showContainer5) {
      return '60px';
    } else if (this.showContainer6 || this.showContainer7) {
      return '50px';
    }
  }

  getRight():string {
    if (this.showContainer1) {
      return '50px';
    } else if (this.showContainer2 || this.showContainer3 || this.showContainer4 || this.showContainer5) {
      return '40px';
    } else if (this.showContainer6 || this.showContainer7) {
      return '0';
    }
  }

  getFontSize():string {
    if (this.showContainer1) {
      return '14px'
    } else if (this.showContainer2 || this.showContainer3 || this.showContainer4 || this.showContainer5 || this.showContainer6) {
      return '13px';
    } else if (this.showContainer7) {
      return '12px';
    }
  }

  ngAfterViewInit() {
  }

}
