import { Component, OnInit } from '@angular/core';
import {NgwWowService} from "ngx-wow";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private wow: NgwWowService) { this.wow.init() }

  ngOnInit(): void {
  }

}
