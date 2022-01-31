import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BreakpointObserver} from "@angular/cdk/layout";
import {DomSanitizer} from "@angular/platform-browser";
declare let $:any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})

export class AboutUsComponent implements OnInit {

  url: string = "assets/data/about.json";
  http: string = './assets/temsanair/';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    autoplay: false,
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
  showContainer1 = false;
  showContainer2 = false;
  showContainer3 = false;
  showContainer4 = false;
  showContainer5 = false;
  showContainer6 = false;
  showContainer7 = false;
  show = false;
  player: YT.Player;
  id: string = '';
  read: {[k:string]:any} = {read1: false, read2: false, read3: false};
  constructor(private ngxService: NgxUiLoaderService,
              public breakpointObserver: BreakpointObserver,
              private sanitizer : DomSanitizer,
              private httpClient: HttpClient) {
    this.aboutImgs = this.httpClient.get<any>(this.url).pipe(map(res => {
      this.show = true;
      this.id ='Sqik4Dn5ldo'
     return res?.slide_img;
    }));
  }

  ngOnInit(): void {
    if ($(window).width() >= 1280) {
      this.showContainer1 = true
    } else if ($(window).width() >= 1024) {
      this.showContainer2 = true;
    } else if ($(window).width() >= 912) {
      this.showContainer3 = true
    } else if ($(window).width() >= 820) {
      this.showContainer4 = true;
    } else if ($(window).width() >= 768) {
      this.showContainer5 = true;
    } else if ($(window).width() >= 540) {
      this.showContainer6 = true;
    } else if ($(window).width() >= 414) {
      this.showContainer7 = true;
    }
    window.scrollTo(0, 0);
      this.cards1 = this.httpClient.get<any>(this.url).pipe(map(res => {
       return res.cards1
      }));
    this.cardHeader1 = this.httpClient.get<any>(this.url).pipe(map(res => res.card_headers1));
    this.cards2 = this.httpClient.get<any>(this.url).pipe(map(res=> {
      if (this.showContainer3 || this.showContainer4 || this.showContainer5 || this.showContainer6 || this.showContainer7) {
        for (let c2 of res.cards2) {
          c2.text1 = c2.text.substr(0,150) + '...';
        }
      }
      return res.cards2;
    }));
    this.cards3 = this.httpClient.get<any>(this.url).pipe(map(res => res.cards3));
  }

  savePlayer(player) {
    this.player = player;
  }
  onStateChange(event) {
  }

  ngOnChanges() {

  }

  getHeight():string {
    if (this.showContainer1 || this.showContainer2) {
      return '100%';
    } else if (this.showContainer4 || this.showContainer3 || this.showContainer5) {
      return '16vh';
    } else if (this.showContainer6) {
      return '24vh';
    } else if (this.showContainer7) {
      return '10vh';
    }
  }

  onRead(elem, i) {
    elem['isRead'] = !elem['isRead'];
    if (elem['isRead']) {
      elem.text1 = elem.text;
      $('#text' + i).attr('style','overflow:auto;height: 100%;')
    }
    else {
      elem.text1 = elem.text.substr(0,150) + '...';
      if (this.showContainer3 || this.showContainer4 || this.showContainer5) {
        $('#text' + i).attr('style','overflow:hidden;height: 16vh;')
      } else if (this.showContainer6) {
        $('#text' + i).attr('style','overflow:hidden;height: 27vh;')
      }
    }
  }

  ngAfterViewInit() {
    let _this = this
    setTimeout(()=> {
      $('.about-cards.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
          414: {
            items: 1,
            smartSpeed: 1000,
            nav: false
          },
        }
      }).on("dragged.owl.carousel", function (event) {
          if (_this.showContainer7){
            _this.cardHeader1 = _this.httpClient.get<any>(_this.url).pipe(map(res => {
              for (let h1 of res.card_headers1) {
                h1.isShow = event.page.index == 3;
              }
              return res.card_headers1
            }));
          }
      });
      $('.about-cards.owl-carousel').find('.owl-dots .owl-dot').click(function (e) {
        if (_this.showContainer7){
          _this.cardHeader1 = _this.httpClient.get<any>(_this.url).pipe(map(res => {
            for (let h1 of res.card_headers1) {
              h1.isShow = e.pointerId == 4;
            }
          return res.card_headers1
          }));
        }
      })
    },500)
  }

  slickInit($event: { event: any; slick: any }) {
  }
}
