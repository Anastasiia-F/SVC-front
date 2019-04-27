import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable()
export class ReportsService {

  url = '/account/reports';
  reportObjectList : Object = {};

  constructor(
    private http: HttpClient
  ) { }

  getAllReports() {
    return this.http.get(this.url)
      .pipe(
        map((respond)=> {
            respond['reports'].forEach(item => {
                this.reportObjectList[item.registration] = item;
            });
            return this.reportObjectList;
          })
      )
  }

  getReportsForVrm(vrm: string) {
    return this.reportObjectList[vrm];
  }
}
