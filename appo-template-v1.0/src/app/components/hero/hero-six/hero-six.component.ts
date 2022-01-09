import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-six',
  templateUrl: './hero-six.component.html',
  styleUrls: ['./hero-six.component.css']
})
export class HeroSixComponent implements OnInit {
  wave:boolean = false;
  constructor(
    private ngw: NgwWowService,
    private router: Router ) {
    this.ngw.init();
  }

  ngOnInit(): void {
    this.wave = this.router.url == '/about';
  }

}
