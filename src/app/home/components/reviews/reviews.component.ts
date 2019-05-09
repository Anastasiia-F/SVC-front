import { Component, OnInit } from '@angular/core';
import * as widget from './widget.json';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit {

  reviewsList : Array<object>;

  constructor() {
    this.reviewsList = widget['data'];
  }

  ngOnInit() {
  }

}
