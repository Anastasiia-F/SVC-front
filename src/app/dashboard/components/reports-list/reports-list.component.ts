import { Component, OnInit } from '@angular/core';
import {ReportsService} from "../../../core/services/reports.service";

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

    allReports: any = [];

    constructor(
        private reports: ReportsService
    ) { }

    ngOnInit() {
        this.reports.getAllReports()
            .subscribe(res => {
                console.log(res['reports']);
                this.allReports = res || [];
        })
    }

}
