import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
declare let $:any;

@Component({
  templateUrl: './automation-solutions.html',
})
export class AutomationSolutions implements OnInit {

  products$: Observable<any>;
  productsList$: Observable<any>;
  url: string = "assets/data/products.json";
  currList = '';
  time:number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
      window.scrollTo(0, 0);
  }


  ngAfterViewInit() {
  }
}
