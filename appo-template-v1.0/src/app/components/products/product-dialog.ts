import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {NgxUiLoaderService} from "ngx-ui-loader";
declare let $:any;
@Component({
  templateUrl:'product-dialog.html'
})
export class ProductDialog {

  dialog;
  idx : number = 0;
  http: string = './assets/temsanair/';
  obj: Observable<any>;
  showContainer1 = false;
  showContainer2 = false;
  showContainer3 = false;
  showContainer4 = false;
  showContainer5 = false;
  showContainer6 = false;
  constructor(private loader: NgxUiLoaderService) {
    this.loader.startLoader('loader-02');
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
    }
  }
}
