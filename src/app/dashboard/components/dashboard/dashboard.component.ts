import { Component, OnInit } from '@angular/core';
import {map, mergeMap} from "rxjs/operators";
import { ReportsService } from "../../../core/services/reports.service";
import { ActivatedRoute } from "@angular/router";
import { DataParserService } from "../../../core/services/data-parser.service";
import {Observable, zip} from "rxjs";
import { CheckDataItem } from "../../../core/models/check-data-item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  report$: Observable <Array<CheckDataItem> >;

  constructor(
    private reports: ReportsService,
    private activeRoute: ActivatedRoute,
    private parsService: DataParserService
  ) {}

  ngOnInit() {

    const id$ = this.activeRoute.parent.params;
    const data$ = this.activeRoute.data;

    this.report$ = zip(id$, data$)
      .pipe(
        mergeMap((data) => {
          let id, reportName;

          data.forEach((item)=> {

            for(let key in item){
              if(key === 'id'){
                id = item[key];
              }
              else if(key === 'reportName'){
                reportName = item[key];
              }
            }
          });

          return this.reports.getReportsByID(id, reportName);
        }),
        map(result => this.parsService.setObject(result))
      )/*
      .subscribe((result)=> {
        this.report$ = this.parsService.setObject(result);
      });*/

  }

}
