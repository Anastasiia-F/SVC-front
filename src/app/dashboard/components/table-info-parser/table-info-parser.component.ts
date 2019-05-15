import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-info-parser',
  templateUrl: './table-info-parser.component.html',
  styleUrls: ['./table-info-parser.component.scss']
})
export class TableInfoParserComponent implements OnInit {

  @Input()
  data: any;

  isCrossIcon: boolean;
  isCheckIcon: boolean;
  rawData: any;

  constructor() { }

  ngOnInit() {

    if(this.data === "true") {
      this.isCheckIcon = true;
    }
    else if (this.data === "false") {
      this.isCrossIcon = true;
    }
    else {
      this.rawData = this.data;
    }
  }



}
