import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CheckService } from '../../../core/services/check.service';

@Component({
  selector: 'app-reg-input',
  templateUrl: './reg-input.component.html',
  styleUrls: ['./reg-input.component.scss']
})
export class RegInputComponent implements OnInit {

  svcReg: string;

  constructor(
    private router: Router,
    private check: CheckService,
    private notifier: NotifierService
  ) { }

  ngOnInit() {
  }

  search() {
    this.check.vdiFullCheck(this.svcReg).subscribe(res => {
      if (res.msg !== 'Success') {
        this.notifier.notify('error', 'Service is not available.')
        return;
      }
      this.check.searchedData = res.data;
      this.router.navigate(['/plans']);
    });
  }

}
