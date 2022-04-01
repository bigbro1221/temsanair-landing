import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
declare let $:any;
@Component({
  selector: 'app-hero-six',
  templateUrl: './hero-six.component.html',
  styleUrls: ['./hero-six.component.css']
})
export class HeroSixComponent implements OnInit {
  wave:boolean = false;
  img:Observable<any>;
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
    private ngw: NgwWowService,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.ngw.init();
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
    this.wave = this.router.url == '/about';
    this.img = this.httpClient.get<any>(this.url).pipe(map(res => res?.image1));
  }

}
