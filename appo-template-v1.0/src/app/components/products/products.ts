import { Component, OnInit } from '@angular/core';
import {ProductsData} from "./products-data";
declare let $:any;
@Component({
  // selector: 'products-range',
  templateUrl: './products.html',
})
export class Products implements OnInit {

  productsData = new ProductsData();
  products:any = [];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
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
    lazyLoad: 'ondemand',
    variableWidth: true,
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
  }

  ngAfterViewInit() {
    for (let img of $('.product-img-slide'+ '.product-text-slide')) {

    }
    for (let text of $('.product-text-slide')) {

    }

    console.log($('.slide'))
    console.log($('.product-img-slide').height())
    console.log($('.product-text-slide').height())
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
}
