import { Injectable } from '@angular/core';
import { TextSeparatorService } from "./text-separator.service";


@Injectable()
export class DataParserService {

  flatObject: Object = {};

  constructor (
    private textSeparator: TextSeparatorService
  ) {}

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

        let _key = this.textSeparator.getText(key);

        this.flatObject[_key] = object[key];
      }
      else {
        this.createFlatObject(object[key]);
      }
    }
  }
}
