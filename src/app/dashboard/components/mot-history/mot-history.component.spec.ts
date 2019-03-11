import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotHistoryComponent } from './mot-history.component';

describe('MotHistoryComponent', () => {
  let component: MotHistoryComponent;
  let fixture: ComponentFixture<MotHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
