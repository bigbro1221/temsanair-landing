import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
declare let $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  img: Observable<any>;
  url: string = "assets/data/main.json";
  http: string = 'http://localhost:4200/assets/temsanair/';
  constructor(private ngw: NgwWowService,
              private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.ngw.init();
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      return res.image6;
    }))
  }

}
