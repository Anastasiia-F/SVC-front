import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  plan: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      this.plan = params.plan;
    });
  }

}
