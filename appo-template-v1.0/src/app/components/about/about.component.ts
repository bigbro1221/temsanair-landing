import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Chart,registerables } from 'chart.js';
import {TranslateService} from "@ngx-translate/core";
Chart.register(...registerables)
declare let $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  img:Observable<any>;
  url: string = "assets/data/main.json";
  http: string = './assets/temsanair/';
  showContainer1 = false;
  showContainer2 = false;
  showContainer3 = false;
  showContainer4 = false;
  showContainer5 = false;
  showContainer6 = false;
  showContainer7 = false;
  showContainer8 = false;

  constructor(
    private httpClient: HttpClient,
    public breakpointObserver: BreakpointObserver,
    private router: Router,
    private ui: TranslateService
  ) {
    // this.img = this.httpClient.get<any>(this.url).pipe(map(res => {
    //   return res?.image3}));
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
  }

  ngOnInit() {

  }

  getWidth() {
    if (this.showContainer6) {
      return '300px';
    } else if (this.showContainer7) {
      return '250px';
    } else if (this.showContainer8) {
      return '230px';
    } else return '500px';
  }

  getHeight() {
    if (this.showContainer6) {
      return '300px';
    } else if (this.showContainer7) {
      return '250px';
    } else if (this.showContainer8) {
      return '230px';
    } else return '500px';
  }

  getLeft1() {
    if (this.showContainer8) {
      return '-35%'
    } else if (this.showContainer6) {
      return '-20%'
    } else if (this.showContainer7) {
      return '-30%'
    }
    else {
      return '-10%'
    }
  }

  getLeft2() {
    if (this.showContainer8) {
      return '-35%'
    } else if (this.showContainer6) {
      return '-20%'
    }
    else {
      return '-10%'
    }
  }

  getRight() {
    if (this.showContainer8) {
      return '-15%'
    }
    else if (this.showContainer7) {
      return '-10%'
    }
    else {
      return '-6%'
    }
  }

  getRight1() {
    if (this.showContainer8) {
      return '-32%'
    }
    else if (this.showContainer7) {
      return '-32%'
    }
    else {
      return '-25%'
    }
  }

  ngAfterViewInit() {
    // let _this = this;
    // let div = document.createElement('div');
    // let canvas = document.createElement('canvas');
    // div.style.width = '100%';
    // div.style.height = '100%';
    // div.className = 'm-auto';
    // div.className = 'wow';
    // div.className = 'fadeInUp';
    // canvas.id = 'myChart';
    // div.append(canvas);
    // document.getElementById('chart').append(div);
    // setTimeout(()=> {
    //   new Chart('myChart', {
    //     type: 'doughnut',
    //     data: {
    //       labels: [
    //         this.ui.instant('weaving_projects'),
    //         this.ui.instant('spinning_projects'),
    //       ],
    //       datasets: [{
    //         data: [30,70],
    //         backgroundColor: [
    //           "#FF6384",
    //           "#FFCE56"
    //         ],
    //       }],
    //     },
    //     options: {
    //       // legend: {
    //       //   display: true,
    //       //   labels: {
    //       //     fontColor: 'rgb(255, 99, 132)'
    //       //   }
    //       // },
    //       color:'#fff',
    //       plugins: {
    //         tooltip: {
    //           callbacks: {
    //             label: function(value) {
    //               let label = _this.ui.instant(value.label) || '';
    //               if (label) {
    //                 label += ': ';
    //               }
    //               if (value.parsed !== null) {
    //                 label += value.parsed + '%';
    //               }
    //               return label;
    //             }
    //           }
    //         },
    //       }
    //     }
    //   });
    // },100)
  }

  onLink() {
    this.router.navigateByUrl('/about');
  }
}
