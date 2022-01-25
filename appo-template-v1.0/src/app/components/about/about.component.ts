import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  img:Observable<any>;
  url: string = "assets/data/main.json";
  http: string = 'http://localhost:4200/assets/temsanair/';

  constructor(private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res => res?.image3));
  }

  onLink() {
    this.router.navigateByUrl('/about');
  }
}
