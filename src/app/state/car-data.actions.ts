import { Action } from '@ngrx/store';
import { CarDataSummary } from "./car-data.interface";

export enum ActionTypes {
    GetSummary = 'GetSummary',
    FetchSummary = 'FetchSummary',
    FetchSummarySuccess = 'FetchSummarySuccess',
    FetchSummaryError = 'FetchSummaryError',

    GetReports = 'GetReports',
    FetchReports = 'FetchReports',
    FetchReportsSuccess = 'FetchReportsSuccess',
    FetchReportsError = 'FetchReportsError'
}


export class GetSummary implements Action {
    readonly type = ActionTypes.GetSummary;
}


export class FetchSummary implements Action {
    readonly type = ActionTypes.FetchSummary;

    constructor(
        public payload: string
    ){}
}

export class FetchSummarySuccess implements Action {
    readonly type = ActionTypes.FetchSummarySuccess;

    constructor(
        public payload: CarDataSummary
    ){}
}

export class FetchSummaryError implements Action {
    readonly type = ActionTypes.FetchSummaryError;

    constructor(
        public payload: String
    ){}
}


export class GetReports implements Action {
    readonly type = ActionTypes.GetReports;
}


export class FetchReports implements Action {
    readonly type = ActionTypes.FetchReports;

    constructor(
        public payload: string
    ){}
}

export class FetchReportsSuccess implements Action {
    readonly type = ActionTypes.FetchReportsSuccess;

    constructor(
        public payload: Object
    ){}
}

export class FetchReportsError implements Action {
    readonly type = ActionTypes.FetchReportsError;

    constructor(
        public payload: String
    ){}
}

export type ActionsUnion = FetchSummary | GetSummary | FetchSummarySuccess | FetchSummaryError | GetReports | FetchReports | FetchReportsSuccess | FetchReportsError;
