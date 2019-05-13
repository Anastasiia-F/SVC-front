import {Injectable} from "@angular/core";


@Injectable()
export class TextSeparatorService {

  constructor() {}

  getText(string) {
    return string.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");
  }
}
