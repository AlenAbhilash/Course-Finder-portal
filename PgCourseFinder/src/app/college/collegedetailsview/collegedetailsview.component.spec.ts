import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegedetailsviewComponent } from './collegedetailsview.component';

describe('CollegedetailsviewComponent', () => {
  let component: CollegedetailsviewComponent;
  let fixture: ComponentFixture<CollegedetailsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegedetailsviewComponent]
    });
    fixture = TestBed.createComponent(CollegedetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
