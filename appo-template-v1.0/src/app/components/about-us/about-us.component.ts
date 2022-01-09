import { Component, OnInit } from '@angular/core';
declare let $:any;
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  ngParallaxConf: IParallaxScrollConfig = {
    parallaxSpeed: 0.5,
    parallaxSmoothness: 1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 80
  };
  constructor() {

  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
