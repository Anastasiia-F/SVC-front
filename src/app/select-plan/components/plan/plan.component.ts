import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @Input()
  checkType: string;

  @Input()
  mostPopular: boolean;

  @Output()
  selected: EventEmitter<any> = new EventEmitter();

  carImage: string;
  checkCount: number;
  price: number;

  constructor() { }

  ngOnInit() {
    if (this.checkType === 'multicheck') {
      this.carImage = 'assets/images/multi-cars.png';
      this.checkCount = 3;
      this.price = 28.90;
    } else {
      this.carImage = 'assets/images/single-car.png';
      this.checkCount = 1;
      this.price = this.checkType === 'SVCheck' ? 19.99 : 9.99;
    }
  }

  selectPlan() {
    this.selected.emit(this.checkType);
  }

}
