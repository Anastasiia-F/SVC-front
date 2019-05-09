import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import {ActionTypes, FetchSummary} from './car-data.actions';
import {Router} from "@angular/router";


import { environment } from '../../environments/environment';
const apiSummary = environment.apiUrl + '/svc/summary/';

@Injectable()
export class CarDataEffects {

    @Effect()
    loadCarDataSummary$ = this.actions$
        .pipe(
            ofType(ActionTypes.FetchSummary),
            mergeMap (
                (action: FetchSummary) => this.http.get(apiSummary + action.payload)
                .pipe(
                    map(carDataSummary => ({type: ActionTypes.FetchSummarySuccess, payload: carDataSummary})),
                    tap(() => {this.router.navigate(['/plans'])}),
                    catchError((error) => of({type: ActionTypes.FetchSummaryError, payload: error }))
                )
            )
        );

    constructor (
        private router: Router,
        private http: HttpClient,
        private actions$: Actions
    ) {}
}
