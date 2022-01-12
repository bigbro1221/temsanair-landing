import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {log} from "util";

@Component({
  selector: 'app-hero-six',
  templateUrl: './hero-six.component.html',
  styleUrls: ['./hero-six.component.css']
})
export class HeroSixComponent implements OnInit {
  wave:boolean = false;
  img:Observable<any>
  constructor(
    private ngw: NgwWowService,
    private router: Router,
    private http: HttpClient
  ) {
    this.ngw.init();
  }

  ngOnInit(): void {
    this.wave = this.router.url == '/about';
    this.getImage();
  }

  getImage() {
    // this.http.get('http://localhost:4200/assets/temsanair/00.webp').subscribe(img=> {
    //   console.log(img)
    // })

  }

}
