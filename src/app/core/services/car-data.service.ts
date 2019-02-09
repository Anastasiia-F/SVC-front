import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class carData {

    carData: Object;

    constructor (
    ) { };

    setCarData (data: Object){
        this.carData = data;
    }

}
