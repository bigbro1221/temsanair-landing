import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
declare let $:any;

@Component({
  templateUrl: './automation-solutions.html',
})
export class AutomationSolutions implements OnInit {

  currList = '';
  img: Observable<any>;
  cards1 : Observable<any>;
  cards2 : Observable<any>;
  cards3 : Observable<any>;
  cards4 : Observable<any>;
  url: string = "assets/data/auto-solution.json";
  http: string = './assets/temsanair/';
  time:number = 0;
  showContainer1:boolean =false;
  showContainer2:boolean =false;
  showContainer3:boolean =false;
  showContainer4:boolean =false;
  showContainer5:boolean =false;
  showContainer6:boolean =false;
  showContainer7:boolean =false;
  showContainer8:boolean =false;
  read: {[k:string]:any} = {read1: false, read2: false, read3: false};
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 1000,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    draggable:true,
    cssEase: 'ease-out',
    centerPadding: '160px',
    swipeToSlide: true,
    swipe: true,
    mouseWheelMove: true,
    easing: 'ease-in',
    lazyLoad: 'ondemand',
    variableWidth: true,
    responsive : [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };

  constructor(private httpClient: HttpClient) {
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

  ngOnInit(){
      window.scrollTo(0, 0);
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      return res.image6;
    }))
    this.cards1 = this.httpClient.get<any>(this.url).pipe(map(res=> {
      res.cards1.text1 = res.cards1.text.substr(0,75) + '...';
      return res.cards1;
    }));
    this.cards2 = this.httpClient.get<any>(this.url).pipe(map(res=> res.cards2 ));
    this.cards3 = this.httpClient.get<any>(this.url).pipe(map(res=> res.cards3 ));
    this.cards4 = this.httpClient.get<any>(this.url).pipe(map(res=> res.cards4 ));
  }


  ngAfterViewInit() {
    setTimeout(()=> {
      $('.automation-slide.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
          414: {
            items: 1,
            smartSpeed: 1000,
            nav: false
          },
          375: {
            items: 1,
            smartSpeed: 1000,
            nav: false
          },
        }
      });
    },500)
  }

  onRead(c1) {
    this.read.read1 = !this.read.read1;
    if (this.read.read1) {
      c1.text1 = c1.text;
      $('.auto-text-1').attr('style','overflow:auto;height: 100%;')
    }
    else {
      c1.text1 = c1.text.substr(0,75) + '...';
      $('.auto-text-1').attr('style','overflow:hidden;height: 11vh;')
    }
  }
}
