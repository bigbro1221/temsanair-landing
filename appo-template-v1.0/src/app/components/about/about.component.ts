import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
declare let $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  img:Observable<any>;
  url: string = "assets/data/main.json";
  http: string = './assets/temsanair/';
  showContainer1 = false;
  showContainer2 = false;
  showContainer3 = false;
  showContainer4 = false;
  showContainer5 = false;
  showContainer6 = false;
  constructor(
    private httpClient: HttpClient,
    public breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res => res?.image3));
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
    }
  }

  ngOnInit() {
  }

  onLink() {
    this.router.navigateByUrl('/about');
  }
}
