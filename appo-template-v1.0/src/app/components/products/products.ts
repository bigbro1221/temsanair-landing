import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {ProductDialog} from "./product-dialog";
import {RouterService} from "../../services/router.service";
import {ProductImgZoom} from "./product-img-zoom";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
declare let $:any;

@Component({
  templateUrl: './products.html',
})
export class Products implements OnInit {

  products$: Observable<any>;
  productsList$: Observable<any>;
  img: Observable<any>;
  url: string = "assets/data/products.json";
  http: string = './assets/temsanair/products/';
  currList = '';
  time:number = 0;
  showContainer:boolean =false;
  showContainer1:boolean =false;
  showContainer2:boolean =false;
  showContainer3:boolean =false;
  showContainer4:boolean =false;
  showContainer5:boolean =false;
  showContainer6:boolean = false;
  showContainer7:boolean = false;
  showContainer8:boolean = false;
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 500,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    draggable:true,
    cssEase: 'ease-out',
    centerPadding: '160px',
    swipeToSlide: true,
    swipe: true,
    mouseWheelMove: true,
    easing: 'ease',
    lazyLoad: 'ondemand',
    // variableWidth: true,
    "responsive": [
    ]
  };
  constructor(private httpClient: HttpClient,
              private dialog: MatDialog,
              private routerSer: RouterService) {
    this.img = this.httpClient.get<any>(this.url).pipe(map(res => res?.main_img));
    this.products$ = this.httpClient.get<any>(this.url).pipe(map(res => {
      for (let d of res?.data) {
        d.count = d?.text.length + d?.detail1.length + d?.detail2.length + d?.detail3.length + d?.detail4.length;
      }
      return res?.data;
    }));
    if ($(window).width() >= 1600) {
      this.showContainer = true
    }
    if ($(window).width() >= 1280) {
      this.showContainer1 = true;
    } else if ($(window).width() >= 1024) {
      this.showContainer2 = true;
    } else if ($(window).width() >= 912) {
      this.showContainer3 = true;
    } else if ($(window).width() >= 820) {
      this.showContainer4 = true;
    } else if ($(window).width() >= 768) {
      this.showContainer5 = true;
    } else if ($(window).width() >= 540) {
      this.showContainer6 = true;
    } else if ($(window).width() >= 414) {
      this.showContainer7 = true;
    } else if ($(window).width() >= 375) {
      this.showContainer8 = true;
    }
    this.productsList$ = this.httpClient.get<any>(this.url).pipe(map(res => res?.productList));
  }

  ngOnInit(){
    if (this.showContainer1 || this.showContainer2) {
      this.slideConfig.responsive = [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
    }
    if (this.showContainer3 || this.showContainer4 || this.showContainer5) {
      this.slideConfig.responsive = [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }]
    }
    if (this.showContainer6 || this.showContainer7 || this.showContainer8) {
      this.slideConfig.responsive = [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    }
    window.scrollTo(0, 0);
  }

  getWidth():string {
    if (this.showContainer1) {
      return '80px';
    } else if (this.showContainer2 || this.showContainer3 || this.showContainer4 || this.showContainer5) {
      return '60px';
    } else if (this.showContainer6 || this.showContainer7 || this.showContainer8) {
      return '50px';
    }
  }

  getRight():string {
    if (this.showContainer1) {
      return '50px';
    } else if (this.showContainer2 || this.showContainer3 || this.showContainer4 || this.showContainer5) {
      return '40px';
    } else if (this.showContainer6 || this.showContainer7 || this.showContainer8) {
      return '0';
    }
  }

  getFontSize():string {
    if (this.showContainer1) {
      return '14px'
    } else if (this.showContainer2 || this.showContainer3 || this.showContainer4 || this.showContainer5 || this.showContainer6) {
      return '13px';
    } else if (this.showContainer7 || this.showContainer8) {
      return '12px';
    }
  }

  identify(index, item) {
    return item.type;
  }

  ngAfterViewInit() {
    setTimeout(()=> {
      this.products$.subscribe(item => {
        for(let p = 0; p < item.length; p++) {
          if ($('#text' + p).text().includes('m3')) {
            $('#text' + p).html($('#text' + p).text().replace('m3', "m<sup>3</sup>"));
          }
          if ($('#text' + p).text().includes('m2')) {
            $('#text' + p).html($('#text' + p).text().replace('m2', "m<sup>2</sup>"));
          }
          $('#img' + p).xzoom({
            tint: '#333',
            Xoffset: this.showContainer7 || this.showContainer8 ? 0 : 100,
            Yoffset: 0,
            zoomWidth:'auto',
            fadeOut:true,
            zoomHeight: 'auto',
            position: this.showContainer7 || this.showContainer8 ? 'bottom' : 'right',
            defaultScale: .7,
            mposition:'fullscreen',
            rootOutput:true,
          });
        }
        if (this.showContainer6 || this.showContainer7 || this.showContainer8) {
          $('.product-content .slick-prev').attr('style','left: -15px !important;z-index:9999999');
          $('.product-content .slick-next').attr('style','right: -15px !important;z-index:9999999');
        }
      })
    },100)
    setTimeout(()=> {
      if (this.showContainer) {
        $('.product-content .slick-slide').attr('style','height: 50vh !important');
      }
      if (this.showContainer8) {
        $('.product-content .carousel .slick-slide').attr('style','height: 54vh !important');
      }
      if (this.showContainer5) {
        $('.product-content .carousel .slick-slide').attr('style','width: 312px !important');
      }
    },500)
  }

  slickInit(e) {
  }

  breakpoint(e) {
  }

  afterChange(e) {
  }

  beforeChange(e) {

  }

  productChange(e,slick) {
    slick.slickGoTo(+this.currList - 1)
  }

  onMouse(e, i, p) {
  }

  onMouseProduct(e, i, p) {
  }


  onMouseProLeave(i, p) {
  }

  onMouseLeave(i, p) {
  }

  onRead(p, i) {
    if (!this.showContainer7 && !this.showContainer8) {
      const dg = this.dialog.open(ProductDialog, {width: '800px', panelClass: 'modal-window-add-edit'});
      dg.componentInstance.dialog = dg;
      dg.componentInstance.obj = p;
      dg.componentInstance.idx = i;
    }
  }

  onClickZoom(p, i) {
  }

  onImgLeave() {

  }
}
