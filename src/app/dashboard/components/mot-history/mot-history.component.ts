import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mot-history',
  templateUrl: './mot-history.component.html',
  styleUrls: ['./mot-history.component.scss']
})
export class MotHistoryComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

}
