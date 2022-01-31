import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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
  constructor(
    private ngw: NgwWowService,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.ngw.init();
  }

  ngOnInit(): void {
    this.wave = this.router.url == '/about';
    this.img = this.httpClient.get<any>(this.url).pipe(map(res => res?.image1));
  }

}
