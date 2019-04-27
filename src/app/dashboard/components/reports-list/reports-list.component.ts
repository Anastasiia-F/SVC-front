import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ReportsService} from "../../../core/services/reports.service";

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

    allReports: any = [];
    router: Router;

    constructor (
        private reports: ReportsService
    ) { }

    ngOnInit() {
        this.reports.getAllReports()
            .subscribe(res => {
                this.allReports = Object.keys(res).map(key => res[key]);
            })
    }

    shoReport(vrm) {
        // this.router.navigate(['/report$', vrm])
    }

}
