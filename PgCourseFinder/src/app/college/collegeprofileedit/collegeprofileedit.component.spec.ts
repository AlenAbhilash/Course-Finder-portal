import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeprofileeditComponent } from './collegeprofileedit.component';

describe('CollegeprofileeditComponent', () => {
  let component: CollegeprofileeditComponent;
  let fixture: ComponentFixture<CollegeprofileeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeprofileeditComponent]
    });
    fixture = TestBed.createComponent(CollegeprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
