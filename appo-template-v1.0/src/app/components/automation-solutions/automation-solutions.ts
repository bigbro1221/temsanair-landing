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
  url: string = "assets/data/auto-solutions.json";
  http: string = 'http://localhost:4200/assets/temsanair/';
  time:number = 0;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(){
      window.scrollTo(0, 0);
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      return res.image6;
    }))
  }


  ngAfterViewInit() {
  }
}
