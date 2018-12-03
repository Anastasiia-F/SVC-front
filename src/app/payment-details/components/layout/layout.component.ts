import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckService } from '../../../core/services/check.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  plan: string;

  constructor(
    private check: CheckService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (!params.plan || !this.check.searchedData) {
        this.router.navigate(['/']);
      }

      this.plan = params.plan;
    });
  }

}
