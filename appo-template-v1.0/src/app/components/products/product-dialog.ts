import {Component} from "@angular/core";

@Component({
  templateUrl:'product-dialog.html'
})
export class ProductDialog {

  dialog;
  obj: {[k:string]:any} = {};
  constructor() {
  }
}
