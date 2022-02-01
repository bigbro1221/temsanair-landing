import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
declare let $:any;
@Component({
  selector: 'app-promo-two',
  templateUrl: './promo-two.component.html',
  styleUrls: ['./promo-two.component.css']
})
export class PromoTwoComponent implements OnInit {


  img: Observable<any>;
  url: string = "assets/data/main.json";
  http: string = './assets/temsanair/';
  showContainer1 = false;
  showContainer2 = false;
  showContainer3 = false;
  showContainer4 = false;
  showContainer5 = false;
  showContainer6 = false;
  showContainer7 = false;
  showContainer8 = false;
  constructor(
    private httpClient: HttpClient,
    public breakpointObserver: BreakpointObserver
  ) {
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

  ngOnInit() {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
     return res.image2
    }))
  }

}
