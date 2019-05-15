import {Injectable} from "@angular/core";


@Injectable()
export class TextSeparatorService {

  constructor() {}

  getText(string) {
    let str;
    if(string.match(/[A-Z][a-z]+|[0-9]+/g)) {
      str = string.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
    }
    else if (string.match(/[A-Z]/g)) {
      str = string;
    }
    return str;
  }
}
