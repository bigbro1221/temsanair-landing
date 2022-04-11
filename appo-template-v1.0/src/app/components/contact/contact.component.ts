import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {TranslateService} from "@ngx-translate/core";
declare let $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  img: Observable<any>;
  url: string = "./assets/data/main.json";
  http: string = './assets/temsanair/';
  showContainer1 = false;
  showContainer2 = false;
  showContainer3 = false;
  showContainer4 = false;
  showContainer5 = false;
  showContainer6 = false;
  showContainer7 = false;
  dataSource = new MatTableDataSource();
  displayedColumns = ['index','logo','link','files'];
  // showContainer8 = true;
  isDownload = false;
  id: number = null;
  sets = [
    {map: []},
  ];
  block:{[k:string]:any} = {};
  isBlock = false;

  arrs= [
    // {id: 0, name: 'Nukus', city: 'nukus', address: 'Nukus'},
    {id: 1, name: 'Uztex', city: 'urgench', address: 'city urganch, str. khorazmiy 22'},
    {id: 2, name: 'Baht Group', city: 'navoi', address: 'city navoiy str. navoi 45'},
    {id: 3, name: 'WBM Romitex', city: 'bukhoro', address: 'city bukhoro str. bukhoriy 33'},
    {id: 4, name: 'Sulton Tex', name1:'Baht Group', name2:'Ostex', city: 'kashkadarya', address: 'city karshi str. afrasiyab 22'},
    {id: 5, name: 'Uztex', city: 'surkhandarya', address: 'city termiz ulitsa farobiy 55'},
    {id: 6, name: 'Baht Group', city: 'samarkand', address: 'city samarkand str. A.Temur 41'},
    {id: 7, name: 'Baht Group', city: 'jizzakh', address: 'city jizzakh str. Jomiy 77'},
    {id: 8, name: 'Poly Tex', city: 'sirdaryo', address: 'city gulistan str. beruni 89'},
    {id: 9, name: 'Bakan',name1: 'Global Textile', city: 'tashkent', address: 'city tashkent str. A.Qodiri 21'},
    {id: 10, name: 'Uztex', name1:'FT Textile', city: 'namangan', address: 'city namangan str. Cholpon 23'},
    {id: 11, name: 'Asaka Textile',name1: 'Khantex', city: 'andijan', address: 'city andijan str. A.Avloni 54'},
    {id: 12, name: 'Uztex', city: 'ferghana', address: 'city ferghana str. farobiy 44'},
  ]

  constructor(private ngw: NgwWowService, private ui: TranslateService,
              private httpClient: HttpClient) {
    if ($(window).width() >= 1280) {
      this.showContainer1 = true
    } else if ($(window).width() >= 1024) {
      this.showContainer2 = true;
    }
    // else if ($(window).width() >= 912) {
    //   // this.showContainer8 = true;
    // }
    else if ($(window).width() >= 820) {
      this.showContainer3 = true;
    } else if ($(window).width() >= 768) {
      this.showContainer4 = true;
    } else if ($(window).width() >= 540) {
      this.showContainer5 = true;
    } else if ($(window).width() >= 414) {
      this.showContainer6 = true;
    } else if ($(window).width() >= 375) {
      this.showContainer7 = true;
    }
  }

  ngOnInit(): void {
    this.ngw.init();
    for(let i=0; i<1; i++) {
      for(let j=0; j<=12; j++) {
        this.sets[i]?.map.push({code:j, flag:false})
      }
    }
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      let data = [];
      for (let d of res.dataSource) {
        data.push({logo:d.logo, logo1:d.logo1, link: d.link, files: d.files})
      }
      this.dataSource.data = data;
      return res;
    }))
  }

  ngAfterViewInit() {
    let ang = this, data;
    setTimeout(()=> {
      $(function() {
        $('.set-1').maphilight();
        $('.teeth-1').on('click', function(e) {
          // data.alwaysOn = false;
          e.preventDefault();
          data = $(this).mouseenter().data('maphilight') || {};  // Default is true which means it is selected
          data.alwaysOn = !data.alwaysOn;
          ang.id = +e.target.id.split('-')[1];
          if (ang.id == 0 || ang.id == 6) {
            ang.block = {};
            ang.isBlock = true;
          } else {
            ang.isBlock = false;
            ang.block = ang.arrs.filter(val => ang.id == val.id)[0];
          }
          console.log(ang.id)
          $('.text-block').addClass('d-block');
          $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
        })
        $('.teeth-1').mouseout(function (evt) {
          evt.preventDefault();
          $('.text-block').removeClass('d-block');
          console.log(ang.id)
        })
      });
      $('.temsan-office-uz.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        items: 3,
      });
      ang.setTeethValues();
      $('.mat-table').find('.mat-header-row').find('.mat-column-index').remove()
      $('.mat-table').find('.mat-row').find('.mat-column-index').remove()
    },1000);
  }

  getWidth(e) {
    if (e == 'ekeler.png' || e == 'steinemann-logo.png') {
      return '40px';
    }
    else if (e == 'steinemann-text.png') {
      return '60px';
    } else return '100px';
  }

  setTeethValues() {
    $('.set-1').maphilight();
    for(let m of this.sets[0].map) {
      if(m.flag) {
        let data = $('#set1-' + m.code).mouseout().data('maphilight') || {};
        data.alwaysOn = !data.alwaysOn;
        $('#set1-' + m.code).data('maphilight', data).trigger('alwaysOn.maphilight');
      }
    }
  }

  onFile(e) {
    $('.bg-logo').addClass('overlay-bg-logo');
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = './assets/files/'+e.type +'/'+e.file;
    link.download = e.file;
    document.body.appendChild(link);
    link.click();
    link.remove();
    $('.bg-logo').removeClass('overlay-bg-logo');
  }
}
