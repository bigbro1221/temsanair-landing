import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
declare let $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  constructor(private ngw: NgwWowService,
              private httpClient: HttpClient) {
    if ($(window).width() >= 1280) {
      this.showContainer1 = true
    } else if ($(window).width() >= 1024) {
      this.showContainer2 = true
    } else if ($(window).width() >= 820) {
      this.showContainer3 = true;
    } else if ($(window).width() >= 768) {
      this.showContainer4 = true;
    } else if ($(window).width() >= 540) {
      this.showContainer5 = true;
    } else if ($(window).width() >= 414) {
      this.showContainer6 = true;
    } else if ($(window).width() >= 375) {
      this.showContainer7 = true;
    }

  }

  ngOnInit(): void {
    this.ngw.init();
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      return res.image6;
    }))
  }

}
