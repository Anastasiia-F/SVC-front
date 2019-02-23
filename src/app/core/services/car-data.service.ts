import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {resolveProjectModule} from "@angular-devkit/build-angular/src/angular-cli-files/utilities/require-project-module";

@Injectable({
    providedIn: 'root'
})
export class CarDataService {

    carData: Object;

    constructor (
        private http: HttpClient
    ) {
        this.carData = {};
    };

    setData (data: Object){
        this.carData = data;
    }

    getSummaryData () {
        return {
            colour: this.carData['Colour'],
            year: this.carData['YearOfManufacture'],
            model: this.carData['Model'],
            vrm: this.carData['Vrm'],
            make: this.carData['Make']
        }
    }



    fetchData (reg_number: String): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.http.get(`/svc/full/${reg_number}`)
                .subscribe(res => {
                    if(res['msg'] === 'Success') {
                        this.carData = res['data'];
                        resolve(res['msg']);
                    }
                    else {
                        reject()
                    }
                });
        });
    }

}
