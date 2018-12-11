import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  allReports: any = [];

  constructor(
    private reports: ReportsService
  ) { }

  ngOnInit() {
    this.reports.getAllReports().subscribe(res => {
      this.allReports = res || [];
    })
  }

}
