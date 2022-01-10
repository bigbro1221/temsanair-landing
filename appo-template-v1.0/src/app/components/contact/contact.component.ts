import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {Router} from "@angular/router";
declare let $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ngw: NgwWowService, private router: Router) {}

  ngOnInit(): void {
    this.ngw.init();
  }

}
