import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTabsComponent } from './payment-tabs.component';

describe('PaymentTabsComponent', () => {
  let component: PaymentTabsComponent;
  let fixture: ComponentFixture<PaymentTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
