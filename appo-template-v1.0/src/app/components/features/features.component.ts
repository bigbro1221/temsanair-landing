import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
declare let $:any;
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  img: Observable<any>;
  url: string = "assets/data/main.json";
  http: string = './assets/temsanair/';
  showContainer = false;
  showContainer1 = false;
  showContainer2 = false;
  showContainer3 = false;
  showContainer4 = false;
  showContainer5 = false;
  showContainer6 = false;
  showContainer7 = false;
  showContainer8 = false;

  constructor(private wow: NgwWowService,
              private httpClient: HttpClient) {
    this.wow.init();
    if ($(window).width() >= 1610) {
      this.showContainer = true;
    }
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
      return res.image4;
    }))
  }
  ngAfterViewInit() {
    if (this.showContainer7 || this.showContainer8) {
      $('.features-headers h4').attr('style','font-size: 10px !important');
    }
  }

}
