import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossiblecoursepiechartreportComponent } from './possiblecoursepiechartreport.component';

describe('PossiblecoursepiechartreportComponent', () => {
  let component: PossiblecoursepiechartreportComponent;
  let fixture: ComponentFixture<PossiblecoursepiechartreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PossiblecoursepiechartreportComponent]
    });
    fixture = TestBed.createComponent(PossiblecoursepiechartreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
