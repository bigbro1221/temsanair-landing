import { Component, OnInit } from '@angular/core';
import {ProductsData} from "./products-data";
import Drift from 'drift-zoom';
declare let $:any;

@Component({
  templateUrl: './products.html',
})
export class Products implements OnInit {

  productsData = new ProductsData();
  products: any = [];
  productsList: any = [];
  currList = '';
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 3,
    dots: true,
    infinite: false,
    arrows: true,
    autoplay: false,
    speed: 500,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    draggable:true,
    // fade: true,
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

  constructor() { }

  ngOnInit(): void {
    this.products = this.productsData.data;
    this.productsList = this.productsData.productList;
  }

  ngAfterViewInit() {
    for (let z of $('.demo-trigger')) {
      new Drift(z, {
        paneContainer: document.querySelector('.img-area'),
        inlinePane: false,
        zoomFactor: 4,
        touchBoundingBox: true,
        containInline: true,
        hoverBoundingBox: true,
      });
    }
    $(".font-spartan").each(function() {
      $(this).html($(this).text().replace('m3', "m<sup>3</sup>"));
    });

  }

  slickInit(e) {
    console.log(e)
  }

  breakpoint(e) {
    console.log(e)
  }

  afterChange(e) {
    console.log(e)
    
  }

  beforeChange(e) {
    console.log(e)
  }

  onChange(value) {
    console.log(value)
  }

  onMouse(i) {
    // console.log(i)
  }

  onMouseLeave(i: number) {
    // for (let z of $('.demo-trigger')) {
    //   new Drift(z, {
    //     paneContainer: paneContainer,
    //     inlinePane: false,
    //     // inlineOffsetY: 900,
    //     zoomFactor: 4,
    //     onSow: false,
    //     onHide: true,
    //     touchBoundingBox: true,
    //     containInline: true,
    //     hoverBoundingBox: true,
    //   });
    // }
  }
}
