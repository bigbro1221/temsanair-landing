import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
declare let $:any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})

export class AboutUsComponent implements OnInit {

  url: string = "assets/data/about.json";
  http: string = 'http://localhost:4200/assets/temsanair/';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    autoplay: true,
    speed: 1500,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    draggable:true,
    cssEase: 'ease-out',
    centerPadding: '160px',
    swipeToSlide: true,
    swipe: true,
    mouseWheelMove: true,
    easing: 'ease',
    lazyLoad: 'ondemand',
    variableWidth: true,
  };
  aboutImgs:Observable<any>;
  cardHeader1:Observable<any>;
  cards1:Observable<any>;
  cards2:Observable<any>;
  cards3:Observable<any>;

  constructor(private ngxService: NgxUiLoaderService,
              private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.aboutImgs = this.httpClient.get<any>(this.url).pipe(map(res => res?.slide_img));
    this.cardHeader1 = this.httpClient.get<any>(this.url).pipe(map(res => res.card_headers1));
    this.cards1 = this.httpClient.get<any>(this.url).pipe(map(res => res.cards1));
    this.cards2 = this.httpClient.get<any>(this.url).pipe(map(res => res.cards2));
    this.cards3 = this.httpClient.get<any>(this.url).pipe(map(res => res.cards3));
  }

  ngAfterViewInit() {
  }

  slickInit($event: { event: any; slick: any }) {

  }
}
