import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsDescriptionComponent } from './payment-details-description.component';

describe('PaymentDetailsDescriptionComponent', () => {
  let component: PaymentDetailsDescriptionComponent;
  let fixture: ComponentFixture<PaymentDetailsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDetailsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
