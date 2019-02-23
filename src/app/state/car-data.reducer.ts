import * as ActionsData from './car-data.actions';
import { ActionTypes } from './car-data.actions';
import {CarDataSummary} from "./car-data.interface";

export const  initialState: CarDataSummary = {
    make: '',
    model: '',
    colour: '',
    year: '',
    vrm: ''
};

export function carDataReducer (state =  initialState, action: ActionsData.ActionsUnion) {
    switch (action.type) {

        case ActionTypes.FetchSummarySuccess: {
            state = action.payload['data'];
            return state;
        }
        case ActionTypes.FetchSummaryError: {
            console.log(action.payload);
            return;
        }
        case ActionTypes.GetSummary: {
            return  initialState;
        }
        default:
            return  initialState;
    }

}
