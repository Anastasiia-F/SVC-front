import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-input',
  templateUrl: './reg-input.component.html',
  styleUrls: ['./reg-input.component.scss']
})
export class RegInputComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/plans']);
  }

}
