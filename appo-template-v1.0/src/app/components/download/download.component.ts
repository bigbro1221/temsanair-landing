import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  img: Observable<any>;
  url: string = "assets/data/main.json";
  http: string = 'http://localhost:4200/assets/temsanair/';
  constructor(private wow: NgwWowService,
              private httpClient: HttpClient) { this.wow.init() }

  ngOnInit() {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      return res.image5;
    }))
  }

}
