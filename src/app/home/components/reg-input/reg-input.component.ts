import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Store, select} from "@ngrx/store";
import { NotifierService } from 'angular-notifier';
import { CarDataService } from '../../../core/services/car-data.service';
import { FetchSummary } from '../../../state/car-data.actions';
import {CarDataSummary} from "../../../state/car-data.interface";

@Component({
  selector: 'app-reg-input',
  templateUrl: './reg-input.component.html',
  styleUrls: ['./reg-input.component.scss']
})
export class RegInputComponent implements OnInit {

  svcReg: string;

  constructor(
    private router: Router,
    private notifier: NotifierService,
    // private carData: CarDataService,
    private store: Store<{carData: CarDataSummary}>

  ) {
  }

  ngOnInit() {
  }

  search() {

    /*this.carData.fetchData(this.svcReg).then(
        response => {
          if(response === 'Success') {
            this.router.navigate(['/plans']);
            return;
          }
          this.notifier.notify('error', 'Service is not available.');
        }
    );*/

    this.store.dispatch(new FetchSummary(this.svcReg));


    /*this.check.vdiFullCheck(this.svcReg)
        .subscribe(res => {
      if (res.msg !== 'Success') {
        this.notifier.notify('error', 'Service is not available.');
        return;
      }
      this.check.searchedData = res.data;
      // localStorage.setItem('car', JSON.stringify());
      this.carData.setData(res.data);
      this.router.navigate(['/plans']);
    });*/
  }

}
