import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  svcReg: string;

  centerContent = [
    {
      icon: 'assets/images/guard.png',
      title: 'What we check',
      content: {
        type: 'list',
        value: [
          'Stolen vehicle database check',
          'Written off vehicle check',
          'Outstanding finance check',
          'MOT history check'
        ]
      }
    },
    {
      icon: 'assets/images/heart-msg.png',
      title: 'Customer satisfaction',
      content: {
        type: 'text',
        value: 'With thousands of checks each month and some of the lowest prices, we have some very happy customers. We are always trying to improve the service we offer.'
      }
    },
    {
      icon: 'assets/images/alarm.png',
      title: 'Quick and easy',
      content: {
        type: 'text',
        value: 'Have your full report delivered to your email within minutes of your order.'
      }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  search() {

  }

}
