import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class ReportsService {

  allReportsUrl = '/account/reports';
  reportByIDUrl = '/account/report/';
  reportObjectList : Object = {}

  constructor(
    private http: HttpClient
  ) { }

  getAllReports() {
    return this.http.get(this.allReportsUrl)
      .pipe(
        map((respond)=> {
            respond['reports'].forEach(item => {
                this.reportObjectList[item._id] = item;
            });
            return this.reportObjectList;
          })
      )
  }

  getReportsByID (
    id: string,
    type: string
  ) {

    if(Object.keys(this.reportObjectList).length) {
      return of(this.reportObjectList[id]['data'][type]);
    }/*
    else {
      return this.http.get(`${this.reportByIDUrl}${id}`)
        .pipe(
          map((resp)=> {
            return this.reportObjectList[id] = resp['report'];
          })
        )
    }*/
  }
}
