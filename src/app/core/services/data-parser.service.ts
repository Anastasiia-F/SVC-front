import { Injectable } from '@angular/core';

@Injectable()
export class DataParserService {

  flatObject: Object = {};

  constructor () {}

  public setObject(object): Object {

    this.createFlatObject(object);
    return this.flatObject;
  }

  private createFlatObject(object) {
    console.log(object);

    for(let key in object) {

      if(typeof object[key] === 'string' ||
        typeof object[key] === 'number' ||
        typeof object[key] === 'boolean' ||
        object[key] === null) {
        this.flatObject[key] = object[key];
      }
      else {
        this.createFlatObject(object[key]);
      }
    }
  }

  private isObject (obj) {
    return obj.constructor === Object;
  }
}
