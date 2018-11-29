import { Component, OnInit } from '@angular/core';
import * as widget from './widget.json';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  svcReg: string;

  centerContent: any;

  constructor() { }

  ngOnInit() {
    this.centerContent = widget['data'];
  }

  search() {

  }

}
