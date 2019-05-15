import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable, of} from "rxjs";

@Injectable()
export class ReportsService {

  allReportsUrl = '/account/reports';
  reportObjectList : Object = {};

  constructor(
    private http: HttpClient
  ) { }

  getAllReports(): Observable<object> {
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
      }
      else {
        return  this.getAllReports()
          .pipe(
            map((result)=> {
                return result[id]['data'][type];
            })
          )
        }
    }
}
