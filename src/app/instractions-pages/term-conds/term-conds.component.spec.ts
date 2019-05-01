import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCondsComponent } from './term-conds.component';

describe('TermCondsComponent', () => {
  let component: TermCondsComponent;
  let fixture: ComponentFixture<TermCondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermCondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermCondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
