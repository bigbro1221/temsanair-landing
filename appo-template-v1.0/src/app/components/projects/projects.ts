import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
declare let $:any;

@Component({
  templateUrl: './projects.html',
})
export class Projects implements OnInit {

  projects$: Observable<any>;
  img: Observable<any>;
  url: string = "assets/data/projects.json";
  http: string = './assets/images/';
  currList = '';
  time:number = 0;
  showContainer1:boolean =false;
  showContainer2:boolean =false;
  showContainer3:boolean =false;
  showContainer4:boolean =false;
  showContainer5:boolean =false;
  showContainer6:boolean = false;
  showContainer7:boolean = false;
  showContainer8:boolean = false;
  constructor(private httpClient: HttpClient) {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res => res?.main_img));
    this.projects$ = this.httpClient.get<any>(this.url).pipe(map(res => {
      return res;
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
    } else if ($(window).width() >= 375) {
      this.showContainer8 = true;
    }
  }

  ngOnInit(){
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    setTimeout(()=> {
      $('.projects.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 12000,
        items: 4,
      });
      $('.gallery a').lightbox({
        minSize: 480
      });
      $('.owl-carousel .owl-stage').addClass('d-flex').addClass('align-items-center');
    },500)
  }

  identify(index) {
    return index;
  }

  getWidth(elem):string {
    if (elem.logo1=='global-textile.png') {
      return '120px';
    } else if (elem.logo1=='realtex-white.jpg') {
      return '150px';
    } else if (elem.logo1=='wbm-romitex1.png') {
      return '450px';
    } else {
      return '210px';
    }
  }

  getTranslate(elem) {
    // if (elem.logo1=='asaka1.png') {
    //   return 'translate(0,15%)';
    // } else if (elem.logo1=='polytext1.png' || elem.logo1 == 'khantex.svg') {
    //   return 'translate(0,40%)';
    // } else if (elem.logo1=='uztex1.png' || elem.logo1 == 'anteks1.png') {
    //   return 'translate(0,10%)';
    // } else if (elem.logo1 == 'anteks1.png') {
    //   return 'translate(0,20%)';
    // } else if (elem.logo1 == 'uztextgroup1.png') {
    //   return 'translate(0,120%)';
    // } else if (elem.logo1 == 'ostex1.png') {
    //   return 'translate(0,80%)';
    // } else if (elem.logo1 == 'bakantex1.png') {
    //   return 'translate(0,90%)';
    // } else if (elem.logo1 == 'wbm-romitex1.png') {
    //   return 'translate(0,165%)';
    // } else {
    //   return '';
    // }
  }

  onImage() {
    // $('.lightbox__nav.lightbox__nav--next').click(function (e) {
    //   setTimeout(()=> {
    //   $(e.target).next().next().addClass('box-wipe-enter');
    //   },100)
    // })
    // $('.lightbox__nav.lightbox__nav--prev').click(function (e) {
    //   setTimeout(()=> {
    //     $(e.target).next().next().next().addClass('box-wipe-leave');
    //   },100)
    // })
  }
}
