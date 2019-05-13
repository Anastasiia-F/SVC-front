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

    for(let key in object) {

      if(typeof object[key] === 'string' ||
        typeof object[key] === 'number' ||
        typeof object[key] === 'boolean' ||
        object[key] === null) {

        let _key = key.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");

        this.flatObject[_key] = object[key];
      }
      else {
        this.createFlatObject(object[key]);
      }
    }
  }
}
