import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-promo-two',
  templateUrl: './promo-two.component.html',
  styleUrls: ['./promo-two.component.css']
})
export class PromoTwoComponent implements OnInit {


  img: Observable<any>;
  url: string = "assets/data/main.json";
  http: string = 'http://localhost:4200/assets/temsanair/';
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
     res.image2.img1 = this.http + res.image2.img1
     res.image2.img2 = this.http + res.image2.img2
     res.image2.img3 = this.http + res.image2.img3
     return res.image2
    }))
  }

}
