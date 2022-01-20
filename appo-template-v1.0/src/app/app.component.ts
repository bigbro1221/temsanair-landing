import {Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";
import {RouterService} from "./services/router.service";
import {NgwWowService} from "ngx-wow";
declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private ngxService: NgxUiLoaderService,
              private wow: NgwWowService,
              private routerSer: RouterService) {
  }

  ngOnInit() {
    this.wow.init();
    this.routerSer.getUrl().subscribe(url=> {
      this.ngxService.startLoader("loader-01");
      setTimeout(() => {
        this.ngxService.stopLoader("loader-01");
      }, 700);
    })
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
}
