import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private wow: NgwWowService) { this.wow.init()}

  ngOnInit(): void {
  }

}
