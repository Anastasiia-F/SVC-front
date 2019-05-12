import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryData } from './battery.component';

describe('BatteryData', () => {
  let component: BatteryData;
  let fixture: ComponentFixture<BatteryData>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryData ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
