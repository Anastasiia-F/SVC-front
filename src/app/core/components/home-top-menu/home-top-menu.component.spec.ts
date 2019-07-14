import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopMenuComponent } from './home-top-menu.component';

describe('HomeTopMenuComponent', () => {
  let component: HomeTopMenuComponent;
  let fixture: ComponentFixture<HomeTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
