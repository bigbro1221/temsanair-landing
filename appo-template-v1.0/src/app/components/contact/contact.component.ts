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
  url: string = "assets/data/main.json";
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
  sets = [
    {map: []},
  ];

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
    this.img = this.httpClient.get<any>(this.url).pipe(map(res=> {
      let data = [];
      for (let d of res.dataSource) {
        data.push({logo:d.logo, link: d.link, files: d.files})
      }
      this.dataSource.data = data;
      console.log(this.dataSource.data)
      return res.image6;
    }))
    // for(let i=0; i<1; i++) {
    //   for(let j=0; j<12; j++) {
    //     this.sets[i].map.push({code:j, flag:false})
    //   }
    // }
    console.log(this.sets)
  }

  ngAfterViewInit() {
    setTimeout(()=> {
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
      let ang = this;
        // adult teeth image 1 functions
        $('.set-1').maphilight();
        $('.teeth-1').on('click', function(e) {
          e.preventDefault();
          let id = +e.target.id.split('-')[1];
          let data = $(this).mouseout().data('maphilight') || {};  // Default is true which means it is selected
          data.alwaysOn = !data.alwaysOn;
          ang.sets[0].map[id].flag = data.alwaysOn;
          $(this).data('maphilight', data).trigger('alwaysOn.maphilight');
        })
      $('.mat-table').find('.mat-header-row').find('.mat-column-index').remove()
      $('.mat-table').find('.mat-row').find('.mat-column-index').remove()
      // console.log($('.mat-table').find('.mat-row').find('.mat-column-index').remove())
      // $('.mat-table').find('.mat-row').remove()
      // ang.setTeethValues();
    },500)
  }

  // setTeethValues() {
  //   for(let i=1; i<12; i++) {
  //     $('.set-'+i).maphilight();
  //     for(let m of this.sets[i].map) {
  //       if(m.flag == true) {
  //         let data = $('#set' + i + '-' + m.code).mouseout().data('maphilight') || {};
  //         data.alwaysOn = !data.alwaysOn;
  //         $('#set' + i + '-' + m.code).data('maphilight', data).trigger('alwaysOn.maphilight');
  //       }
  //     }
  //   }
  // }

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
