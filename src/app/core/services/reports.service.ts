import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReportsService {

  url = '/account/reports';

  constructor(
    private http: HttpClient
  ) { }

  getAllReports() {
    return this.http.get(`${this.url}`);
  }

  getReportsForVrm(vrm: string) {
    return this.http.get(`${this.url}/${vrm}`);
  }

  getReportById(id: number) {
    return this.http.get(`/account/report/${id}`);
  }
}
