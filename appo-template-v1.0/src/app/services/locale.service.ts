import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {Chart} from "chart.js";

declare let $: any;

export interface Lang {
  value: string;
  viewValue: string;
  viewTranslate: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocService implements OnInit, OnDestroy {

  public defaultLang: string = '';
  public current = new BehaviorSubject('');
  subs: Subscription = new Subscription();
  langs: Lang[] = [
    {value: 'ru', viewValue: 'RU', viewTranslate: 'Русский'},
    {value: 'en', viewValue: 'EN', viewTranslate: 'English'},
    {value: 'uz', viewValue: 'UZ', viewTranslate: "O'zbek"}
  ];

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.subs.add(this.current.pipe(take(1)).subscribe(lang => {
      this.translate.setDefaultLang(lang || 'ru');
      this.defaultLang = lang || 'ru';
      this.translate.setDefaultLang('ru');
      this.translate.addLangs(['ru', 'en', 'uz']);
      this.defaultLang = this.translate.getBrowserLang();
      this.translate.use(localStorage.getItem('lang') != null ? localStorage.getItem('lang') : this.defaultLang);
    }));
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    let _this = this;
    this.current.next(language);
    $('.langbtn').removeClass('active-lang');
    localStorage.setItem('lang',language);
    $('#langbtn_'+language).addClass('active-lang');
    this.translate.use(language);
    // document.getElementById('myChart').parentElement.remove();
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
    //         this.translate.instant('weaving_projects'),
    //         this.translate.instant('spinning_projects'),
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
    //               let label = _this.translate.instant(value.label) || '';
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
    this.defaultLang = language;
  }

  getCurrentLang() {
    return this.current;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
