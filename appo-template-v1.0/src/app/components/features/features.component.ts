import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  img: Observable<any>;
  url: string = "assets/data/main.json";
  http: string = 'http://localhost:4200/assets/temsanair/';

  constructor(private wow: NgwWowService,
              private httpClient: HttpClient) { this.wow.init()}

  ngOnInit() {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      res.image4.img1 = this.http + res.image4.img1
      res.image4.img2 = this.http + res.image4.img2
      return res.image4;
    }))
  }

}
