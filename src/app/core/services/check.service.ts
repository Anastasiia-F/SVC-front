import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  searchedData: any;

  constructor(
    private http: HttpClient
  ) { }

  vdiFullCheck( registration: string ) : any {
    return this.http.get(`/svc/full/${registration}`);
  }

  getSummary() {
    if (this.searchedData) {
      return {
        colour: this.searchedData['Colour'],
        year: this.searchedData['YearOfManufacture'],
        model: this.searchedData['Model'],
        vrm: this.searchedData['Vrm'],
        make: this.searchedData['Make']
      }
    }
  }
}
