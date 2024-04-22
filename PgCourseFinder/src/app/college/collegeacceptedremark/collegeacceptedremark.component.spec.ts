import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeacceptedremarkComponent } from './collegeacceptedremark.component';

describe('CollegeacceptedremarkComponent', () => {
  let component: CollegeacceptedremarkComponent;
  let fixture: ComponentFixture<CollegeacceptedremarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeacceptedremarkComponent]
    });
    fixture = TestBed.createComponent(CollegeacceptedremarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
