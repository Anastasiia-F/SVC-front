import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ReportsService} from "../../../core/services/reports.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

    allReports$: Observable<any>;
    router: Router;

    constructor (
        private reports: ReportsService
    ) { }

    ngOnInit() {
      this.allReports$ = this.reports.getAllReports()
          .pipe(
            map((res)=> {
              return Object.keys(res)
                        .map(key => res[key]);
            })
          )
    }

}
