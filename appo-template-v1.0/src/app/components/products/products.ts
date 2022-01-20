import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {ProductDialog} from "./product-dialog";
import {RouterService} from "../../services/router.service";
declare let $:any;

@Component({
  templateUrl: './products.html',
})
export class Products implements OnInit {

  products$: Observable<any>;
  productsList$: Observable<any>;
  url: string = "assets/data/products.json";
  currList = '';
  time:number = 0;
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
    // "responsive": [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  constructor(private http: HttpClient,
              private dialog: MatDialog,
              private routerSer: RouterService) {
    this.products$ = this.http.get<any>(this.url).pipe(map(res => {
      for (let d of res?.data) {
        d.count = d?.text.length + d?.detail1.length + d?.detail2.length + d?.detail3.length + d?.detail4.length;
      }
      return res?.data;
    } ));
    this.productsList$ = this.http.get<any>(this.url).pipe(map(res => res?.productList));
  }

  ngOnInit(){
    window.scrollTo(0, 0);
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
        }
      })
    },100)
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
    let offsetX,offsetY;
     e.offsetX ? offsetX = e.offsetX : offsetX = e.pageX
     e.offsetY ? offsetY = e.offsetY : offsetX = e.pageX
     let x = offsetX/e.target.clientWidth * 100
     let y = offsetY/e.target.clientHeight * 100
    $('#img_par' + i).removeClass('img-none')
    $('#img_par' + i).attr('style', 'background-image: url(./assets/temsanair/products/'+p?.img+');background-position: '+x + '% ' + y + '%; width:100%;height:30vh');
    $('#product' + i).attr('style', 'opacity: 0');
    $('#icons' + i).attr('style', 'opacity: 0');
  }

  onMouseProduct(e, i, p) {
    $('#img' + i).attr('style', 'opacity: 0');
  }


  onMouseProLeave(i, p) {
    $('#img' + i).attr('style', 'opacity: 1');
  }

  onMouseLeave(i, p) {
    $('#img_par' + i).addClass('img-none');
    $('#img_par' + i).attr('style', 'width:auto');
    $('#product' + i).attr('style', 'opacity: 1');
    $('#icons' + i).attr('style', 'opacity: 1');
  }

  onRead(p, i) {
    const dg = this.dialog.open(ProductDialog, {width: '800px', panelClass: 'modal-window-add-edit'});
    dg.componentInstance.dialog = dg;
    dg.componentInstance.obj = p;
    dg.componentInstance.obj.i = i;
  }

  onClickZoom() {
    this.routerSer.setZoom(true);
  }

  onImgLeave() {
    this.routerSer.setZoom(false);
  }
}
