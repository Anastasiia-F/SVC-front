import { Component, OnInit } from '@angular/core';
import { mergeMap } from "rxjs/operators";
import {ReportsService} from "../../../core/services/reports.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { DataParserService } from "../../../core/services/data-parser.service";

@Component({
  selector: 'app-battery-data',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryData implements OnInit {

    report: Object;

  constructor(
      private reports: ReportsService,
      private activeRoute: ActivatedRoute,
      private parsService: DataParserService
  ) {}

  ngOnInit() {
    let id;
    this.activeRoute.parent.paramMap.
    pipe(
      mergeMap((params:ParamMap) => {
        id = params.get('id');
        return this.reports.getReportsByID(id, 'BatteryData');
      })
    )
    .subscribe((result)=> {
      this.report = this.parsService.setObject(result);
    });
  }

}
