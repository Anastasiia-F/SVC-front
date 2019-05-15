import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfoParserComponent } from './table-info-parser.component';

describe('TableInfoParserComponent', () => {
  let component: TableInfoParserComponent;
  let fixture: ComponentFixture<TableInfoParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInfoParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
