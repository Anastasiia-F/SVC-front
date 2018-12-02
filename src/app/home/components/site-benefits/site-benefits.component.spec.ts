import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBenefitsComponent } from './site-benefits.component';

describe('SiteBenefitsComponent', () => {
  let component: SiteBenefitsComponent;
  let fixture: ComponentFixture<SiteBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
