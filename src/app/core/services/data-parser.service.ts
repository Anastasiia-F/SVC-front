import { Injectable } from '@angular/core';
import { TextSeparatorService } from "./text-separator.service";
import { CheckDataItem } from "../models/check-data-item";


@Injectable()
export class DataParserService {

  flatList: Array<CheckDataItem>;
  levelCounter: number;

  constructor (
    private textSeparator: TextSeparatorService
  ) {}

  public setObject(object): Array<CheckDataItem> {
    this.levelCounter = 0;
    this.flatList = [];

    this.createFlatObject(object);

    return this.flatList;
  }

  private createFlatObject(object) {
    let localFirstLevelCounter = Object.keys(object).length;
    this.levelCounter++;

    for(let key in object) {
      let obj: CheckDataItem = {};
      let _key = this.textSeparator.getText(key);

      if(typeof object[key] === 'string' ||
        typeof object[key] === 'number' ||
        typeof object[key] === 'boolean' ||
        object[key] === null) {


        obj.name = _key;
        obj.data = object[key];
        obj.isTitle = false;
        obj.level = this.levelCounter;

        this.flatList.push(obj);
      }
      else {

        // For more nice result in the table
        if(this.levelCounter == 1 && localFirstLevelCounter == 1) {
          this.levelCounter--;
        }
        else {
          if(Array.isArray(object)) {
            _key = parseInt(_key) + 1;
          }
          obj.name = _key;
          obj.data = null;
          obj.isTitle = true;
          obj.level = this.levelCounter;

          this.flatList.push(obj);
        }

        this.createFlatObject(object[key]);
      }
    }

    this.levelCounter--;
  }

}
